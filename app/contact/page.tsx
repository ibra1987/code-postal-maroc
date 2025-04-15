"use client"

import { useActionState } from "react"
import { sendMessage } from "../actions/sendMessage"
import { Metadata } from "next"


export const  metadata : Metadata = {
  title:"Code Postal Maroc | Page de contact",
  description:"Utilisez le fomrulaires pour nous contacter. Nous sommes ouvert à toute suggèstion, remarque ou demande de partenariat."
}

function ContactPage() {
  
    const  [state ,action] =useActionState(sendMessage,undefined)
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start px-4 gap-6 py-24">
          {state?.error && <span className="text-red-500">{state.error} </span>}
          {state?.success && < span className="text-green-600"> Message envoyé. Merci</span>}
         
         <h1 className="text-black font-black text-4xl"> Contactez nous </h1>
        <form action={action} className="w-full md:w-3/5 flex flex-col gap-3">
            <input name="name" className="w-full rounnded border p-2" required type="text" placeholder="Votre nom"/>
            <input name="email" className="w-full rounnded border p-2"  placeholder="Votre email" required type="email"/>
            <textarea name="message" placeholder="Votre message" required className="w-full rounnded border p-2" cols={10} rows={5}>
            </textarea>
            <button className="w-full bg-green-600 text-white p-2 rounded outline-none hover:bg-green-700">
                Envoyer

            </button>
        </form>
    </main>
  )
}

export default ContactPage