import codes from '@/assets/codes'
import type { MetadataRoute } from 'next'
import { Region } from './code-postal-maroc/regions/[regionName]/page'
import { provinces } from '@/assets/provinces'
import { codePostaux } from '@/assets/codes_postaux'
import { agences } from '@/assets/agences'

 export const baseUrl ="https://codepostalmaroc.com"

export default function sitemap(): MetadataRoute.Sitemap {
    const _agences =  Object.keys(agences).map((agence) => {
        return {
            url: `${baseUrl}/code-postal-maroc/agences/${agence.toLowerCase().trim()}`,
           lastModified: new Date(),
           changeFrequency: 'monthly' as const,
           priority: 1,
             }
    });

    const _codes =  Object.keys(codePostaux).map((code) => {
        return {
            url: `${baseUrl}/code-postal-maroc/codes/${code}`,
           lastModified: new Date(),
           changeFrequency: 'monthly' as const,
           priority: 1,
             }
    });
    const _provinces =  Object.keys(provinces).map((region) => {
        return {
            url: `${baseUrl}/code-postal-maroc/provinces/${region.toLowerCase().trim()}`,
           lastModified: new Date(),
           changeFrequency: 'monthly' as const,
           priority: 1,
             }
    });

    const _regions =  codes.map((region:Region) =>{
        return {
            url: `${baseUrl}/code-postal-maroc/regions/${region.REGION_POSTALE.toLowerCase().trim()}`,
           lastModified: new Date(),
           changeFrequency: 'monthly' as const,
           priority: 1,
             }
    } )
    
  return [
    ..._agences,
    ..._codes,
    ..._provinces,
    ..._regions,
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact` ,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/regions-postales-maroc`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
        url: `${baseUrl}/conditions-utilisation`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${baseUrl}/disclaimer`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: `${baseUrl}/politique-de-confidentialite`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
  ]
}