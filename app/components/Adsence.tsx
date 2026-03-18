// components/AdUnit.tsx
'use client'
import { useEffect } from 'react'

export default function AdUnit({ slot, format = 'auto' }:{slot:string, format?:string}) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {}
  }, [])

  return (
   <ins className="adsbygoogle"
     style={{display:"block"}}
     data-ad-client="ca-pub-8402123668861669"
     data-ad-slot={slot}
     data-ad-format={format}
     data-full-width-responsive="true"/>
  )
}