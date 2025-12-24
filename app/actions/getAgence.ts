"use server";

import { getAgences } from "./getAgences";

// Helper function to calculate similarity between two strings
function similarity(s1: string, s2: string): number {
  const str1 = s1.toLowerCase();
  const str2 = s2.toLowerCase();
  
  if (str1 === str2) return 1;
  if (str1.length < 2 || str2.length < 2) return 0;
  
  // Check for direct substring match
  if (str1.includes(str2) || str2.includes(str1)) return 0.9;
  
  // Calculate Jaro-Winkler similarity
  let m = 0;
  const maxDistance = Math.max(str1.length, str2.length) / 2 - 1;
  const str1Matches = new Array(str1.length).fill(false);
  const str2Matches = new Array(str2.length).fill(false);
  
  for (let i = 0; i < str1.length; i++) {
    const start = Math.max(0, i - maxDistance);
    const end = Math.min(i + maxDistance + 1, str2.length);
    
    for (let j = start; j < end; j++) {
      if (!str2Matches[j] && str1[i] === str2[j]) {
        str1Matches[i] = str2Matches[j] = true;
        m++;
        break;
      }
    }
  }
  
  if (m === 0) return 0;
  
  let k = 0;
  let transpositions = 0;
  
  for (let i = 0; i < str1.length; i++) {
    if (str1Matches[i]) {
      let j;
      for (j = k; j < str2.length; j++) {
        if (str2Matches[j]) {
          k = j + 1;
          break;
        }
      }
      
      if (str1[i] !== str2[j]) {
        transpositions++;
      }
    }
  }
  
  transpositions /= 2;
  
  // Jaro similarity
  const jaro = (m / str1.length + m / str2.length + (m - transpositions) / m) / 3;
  
  // Jaro-Winkler bonus
  const prefix = 0.1;
  let l = 0;
  while (l < 4 && str1[l] === str2[l]) {
    l++;
  }
  
  return jaro + l * prefix * (1 - jaro);
}

// Helper function to remove accents and special characters
function normalizeString(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9 ]/gi, '')
    .toLowerCase();
}

export async function getAgence(agence: string) {
  const agences = await getAgences();
  
  // Exact match
  if (agences[agence]) {
    return {
      agence: agences[agence],
      matchType: 'exact' as const,
      originalQuery: agence
    };
  }
  
  const normalizedQuery = normalizeString(agence);
  const agenceEntries = Object.entries(agences);
  let bestMatch: { name: string; data: any; score: number } | null = null;
  
  // Try different matching strategies
  for (const [name, data] of agenceEntries) {
    const normalizedName = normalizeString(name);
    let score = 0;
    
    // Strategy 1: Direct normalized string comparison
    if (normalizedName === normalizedQuery) {
      score = 1.0;
    }
    // Strategy 2: Substring match
    else if (normalizedName.includes(normalizedQuery) || normalizedQuery.includes(normalizedName)) {
      score = 0.9;
    }
    // Strategy 3: Similarity algorithm
    else {
      score = similarity(normalizedName, normalizedQuery);
    }
    
    // Strategy 4: Word-by-word matching (for multi-word queries)
    const queryWords = normalizedQuery.split(' ').filter(w => w.length > 2);
    const nameWords = normalizedName.split(' ').filter(w => w.length > 2);
    
    if (queryWords.length > 0) {
      let wordMatchScore = 0;
      for (const queryWord of queryWords) {
        if (nameWords.some(nameWord => nameWord.includes(queryWord) || queryWord.includes(nameWord))) {
          wordMatchScore += 0.2;
        }
      }
      score = Math.max(score, wordMatchScore);
    }
    
    // Strategy 5: Check if it's a common abbreviation
    const commonAbbreviations: Record<string, string> = {
      'ctr': 'centre',
      'cent': 'centre',
      'ag': 'agence',
      'bvd': 'boulevard',
      'av': 'avenue',
      
    };
    
    let abbreviationScore = 0;
    const queryParts = normalizedQuery.split(' ');
    const nameParts = normalizedName.split(' ');
    
    for (let i = 0; i < Math.min(queryParts.length, nameParts.length); i++) {
      const queryPart = queryParts[i];
      const namePart = nameParts[i];
      
      if (commonAbbreviations[queryPart] === namePart || 
          commonAbbreviations[namePart] === queryPart) {
        abbreviationScore += 0.3;
      }
    }
    
    score = Math.max(score, abbreviationScore);
    
    // Update best match if this score is better
    if (score > 0.4 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { name, data, score };
    }
  }
  
  // Return best match if found
  if (bestMatch) {
    return {
      agence: bestMatch.data,
      matchType: 'similar' as const,
      originalQuery: agence,
      matchedName: bestMatch.name,
      confidence: bestMatch.score
    };
  }
  
  // Try fuzzy search by province or region if no agence match
  const queryWords = normalizedQuery.split(' ').filter(w => w.length > 2);
  let provinceMatches = [];
  let regionMatches = [];
  
  for (const [name, data] of agenceEntries) {
    const normalizedProvince = normalizeString(data.province);
    const normalizedRegion = normalizeString(data.region);
    
    // Check if query words match province or region
    const provinceScore = queryWords.some(word => 
      normalizedProvince.includes(word) || word.includes(normalizedProvince)
    ) ? 0.7 : 0;
    
    const regionScore = queryWords.some(word => 
      normalizedRegion.includes(word) || word.includes(normalizedRegion)
    ) ? 0.6 : 0;
    
    if (provinceScore > 0) {
      provinceMatches.push({ name, data, score: provinceScore });
    }
    
    if (regionScore > 0) {
      regionMatches.push({ name, data, score: regionScore });
    }
  }
  
  // Return first province match if found
  if (provinceMatches.length > 0) {
    const match = provinceMatches.sort((a, b) => b.score - a.score)[0];
    return {
      agence: match.data,
      matchType: 'province' as const,
      originalQuery: agence,
      matchedName: match.name,
      confidence: match.score
    };
  }
  
  // Return first region match if found
  if (regionMatches.length > 0) {
    const match = regionMatches.sort((a, b) => b.score - a.score)[0];
    return {
      agence: match.data,
      matchType: 'region' as const,
      originalQuery: agence,
      matchedName: match.name,
      confidence: match.score
    };
  }
  
  // No match found at all
  return {
    agence: null,
    matchType: 'none' as const,
    originalQuery: agence
  };
}

// Helper function to get multiple similar results
export async function getSimilarAgences(query: string, limit: number = 5) {
  const agences = await getAgences();
  const normalizedQuery = normalizeString(query);
  const agenceEntries = Object.entries(agences);
  const results: Array<{ name: string; data: any; score: number }> = [];
  
  for (const [name, data] of agenceEntries) {
    const normalizedName = normalizeString(name);
    const score = similarity(normalizedName, normalizedQuery);
    
    if (score > 0.3) {
      results.push({ name, data, score });
    }
  }
  
  // Sort by score descending and limit results
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(r => ({
      name: r.name,
      ...r.data,
      confidence: r.score
    }));
}