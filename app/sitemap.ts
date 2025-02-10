import codes from '@/assets/codes'
import type { MetadataRoute } from 'next'
import { Region } from './regions-postales/[regionName]/page'
import { provinces } from '@/assets/provinces'
import { codePostaux } from '@/assets/codes_postaux'
import { agences } from '@/assets/agences'

 export const baseUrl ="https://codepostalmaroc.com"

export default function sitemap(): MetadataRoute.Sitemap {

    const regionSearchResults= codes.map((region:Region) =>{
      return {
        url: `${baseUrl}/recherche/?search=${region.REGION_POSTALE.toLowerCase().trim()}`,
        changeFrequency: 'yearly' as const,
      priority:1

      
      }
    })
    const localiteSearchResults= codes.map((localite:Region) => {
      return  {
        url: `${baseUrl}/recherche/?search=${localite.AGENCE.toLowerCase().trim()}`,
        changeFrequency: 'yearly' as const,
      priority:1

      
      }
    })
    const _agences =  Object.keys(agences).map((agence) => {
        return {
            url: `${baseUrl}/agences/${agence.toLowerCase().trim().replaceAll(" ","-")}`,
           lastModified: new Date(),
           changeFrequency: 'monthly' as const,
           priority: 1,
             }
    });

    const _codes =  Object.keys(codePostaux).map((code) => {
        return {
            url: `${baseUrl}/codes/${code}`,
           lastModified: new Date(),
           changeFrequency: 'monthly' as const,
           priority: 1,
             }
    });
    const _provinces =  Object.keys(provinces).map((province) => {
        return {
            url: `${baseUrl}/provinces/${province.toLowerCase().trim().replaceAll(" ","-")}`,
           lastModified: new Date(),
           changeFrequency: 'monthly' as const,
           priority: 1,
             }
    });

    const _regions =  codes.map((region:Region) =>{
        return {
            url: `${baseUrl}/regions/${region.REGION_POSTALE.toLowerCase().trim()}`,
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
    ...regionSearchResults,
    ...localiteSearchResults,
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