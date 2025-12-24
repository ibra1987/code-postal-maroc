import type { MetadataRoute } from 'next'
import { getProvinces } from './actions/getProvinces'
import { getRegions } from './actions/getRegions'
import { getAgences } from './actions/getAgences'


 export const baseUrl ="https://codepostalmaroc.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {




  const provinces = await getProvinces()
  const _provinces =Object.keys(provinces).map((province)=>{
    return {
      url: `${baseUrl}/provinces-postales/${province.toLowerCase().trim().replaceAll(" ","-")}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    }
  })

  // regions 
  const regions = await getRegions()
  const  _regions = Object.keys(regions).map((region)=>{
    return {
       url: `${baseUrl}/regions-postales/${region.toLowerCase().trim().replaceAll(" ","-")}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    }
  })

  const agences = await getAgences()
  const _agences = Object.keys(agences).map((agence)=>{
    return {
      url: `${baseUrl}/agences/${agence.toLowerCase().trim().replaceAll(" ","-")}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    }
  })

  
    
  return [
    ..._provinces,
    ..._regions,
    ..._agences,
 
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