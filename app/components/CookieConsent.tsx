"use client"

import Link from "next/link"
import { useState } from "react"

const CookieConsent = () => {
    const [show,setShow]=  useState(true)
  return (
    <div className="w-full bg-red-500 text-white">
    <p>
    Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre 
    <Link className="font-medium underline" href="/politique-de-confidentialite">politique de confidentialité</Link> et l'utilisation des cookies.
  </p>
  <button onClick={()=>{}}>Accepter</button>
  <button onClick={()=>setShow(false)}>Refuser</button>
    </div>

  )
}

export default CookieConsent