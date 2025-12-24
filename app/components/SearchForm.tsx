'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, MapPin, Hash, Globe, Map, X, TrendingUp } from 'lucide-react'

type AgenceCode = {
  REGION_POSTALE: string
  PROVINCE: string
  AGENCE: string
  NOUVEAU_CODE_POSTAL: number
}

interface SearchPageProps {
  codes: AgenceCode[]
}

export default function SearchForm({ codes }: SearchPageProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  

  // Fuzzy search function
  const searchCodes = useMemo(() => {
    if (!searchQuery.trim()) return []

    const query = searchQuery.toLowerCase().trim()
    
    const results = codes?.map(code => {
      let score = 0
      const searches = [
        { value: code.AGENCE, weight: 3 },
        { value: code.PROVINCE, weight: 2 },
        { value: code.REGION_POSTALE, weight: 1.5 },
        { value: code.NOUVEAU_CODE_POSTAL.toString(), weight: 4 }
      ]

      searches.forEach(({ value, weight }) => {
        const lowerValue = value.toLowerCase()
        
        // Exact match
        if (lowerValue === query) {
          score += 100 * weight
        }
        // Starts with
        else if (lowerValue.startsWith(query)) {
          score += 50 * weight
        }
        // Contains
        else if (lowerValue.includes(query)) {
          score += 25 * weight
        }
        // Word match
        else {
          const words = lowerValue.split(' ')
          if (words.some(word => word.startsWith(query))) {
            score += 30 * weight
          }
        }
      })

      return { ...code, score }
    })

    return results
      ?.filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 50) // Limit to top 50 results
  }, [searchQuery, codes])

  // Popular searches or recent
  const popularSearches = [
    'Rabat chellat',
    'Casablanca',
    'Marrakech hay al massira',
    'Agadir anza',
    'Tanger ppal'
  ]

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-10 backdrop-blur-sm bg-white/90">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-red-500 transition-colors"
          >
            ← Retour
          </Link>
        </div>
      </header>

      <main className="w-full container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Search Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-black mb-3">
              Rechercher un Code Postal
            </h1>
            <p className="text-gray-600 text-lg">
              Recherchez par agence, province, région ou code postal
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setIsSearching(true)
                }}
                placeholder="Ex: Rabat, Chellah, 10002..."
                className="w-full pl-12 pr-12 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-red-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setIsSearching(false)
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Search Stats */}
            {searchQuery && (
              <div className="mt-2 text-sm text-gray-500">
                {searchCodes?.length} résultat{searchCodes?.length !== 1 ? 's' : ''} trouvé{searchCodes?.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>

          {/* Popular Searches - Show when no search */}
          {!searchQuery && (
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-5 w-5 text-gray-400 mr-2" />
                <h2 className="text-lg font-semibold text-black">Recherches populaires</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((search) => (
                  <button
                    key={search}
                    onClick={() => setSearchQuery(search)}
                    className="px-4 py-2 bg-gray-100 hover:bg-red-50 hover:text-red-600 rounded-lg text-sm font-medium transition-colors"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {searchQuery && (
            <div className="space-y-3">
              {searchCodes?.length > 0 ? (
                searchCodes?.map((code, index) => (
                  <Link
                    key={index}
                    href={`/agences/${encodeURIComponent(code.AGENCE.toLowerCase().replace(/\s+/g, '-'))}`}
                    className="group block"
                  >
                    <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-red-300 hover:shadow-md transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-black group-hover:text-red-600 transition-colors mb-2">
                            {code.AGENCE}
                          </h3>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                            <div className="flex items-center text-gray-600">
                              <Globe className="h-4 w-4 mr-2 text-gray-400" />
                              <span>{code.REGION_POSTALE}</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Map className="h-4 w-4 mr-2 text-gray-400" />
                              <span>{code.PROVINCE}</span>
                            </div>
                            <div className="flex items-center text-red-600 font-semibold">
                              <Hash className="h-4 w-4 mr-2" />
                              <span>{code.NOUVEAU_CODE_POSTAL}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="ml-4">
                          <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-red-50 transition-colors">
                            <MapPin className="h-5 w-5 text-gray-500 group-hover:text-red-500" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Aucun résultat trouvé
                  </h3>
                  <p className="text-gray-600">
                    Essayez avec un autre terme de recherche
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Empty State - Initial */}
          {!searchQuery && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 rounded-full mb-4">
                <Search className="h-10 w-10 text-red-500" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">
                Commencez votre recherche
              </h3>
              <p className="text-gray-600">
                Tapez le nom d'une agence, province, région ou code postal
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}