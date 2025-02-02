

import Link from 'next/link'
import React from 'react'

const Apropos = () => {
  return (
    <div className='w-full flex flex-col justify-start items-start gap-8 py-10'>

<h2 className='w-full  font-black text-3xl m-2 text-gray-700'> À Propos des Codes Postaux Marocains</h2>
<p className='  text-gray-600 text-left'>
Le système postal marocain utilise des codes à 5 chiffres pour identifier précisément chaque zone de distribution. Notre base de données complète vous permet de trouver rapidement le code postal de n&apos;importe quelle adresse au Maroc.
Pour plus d&apos;informations ,visiter le site web de <Link className='underline' href="https://www.poste.ma/" target='_blank' >Poste Maroc</Link>.
</p>
    </div>
  )
}

export default Apropos