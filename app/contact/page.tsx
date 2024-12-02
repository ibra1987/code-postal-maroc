"use client"

import { useActionState } from "react"
import { sendMessage } from "../actions/sendMessage"

function page() {
  
    const  [state ,action] =useActionState(sendMessage,undefined)
  return (
    <main className="w-full flex min-h-screen flex-col items-center justify-start gap-10">
          {state?.error && <span className="text-red-500">{state.error} </span>}
          {state?.success && < span className="text-green-600"> Message envoyé. Merci</span>}
         
         <h1 className="text-black text-4xl"> Contactez nous </h1>
        <form action={action} className="w-full md:w-3/5 flex flex-col gap-3">
            <input name="name" className="w-full rounnded border p-2" required type="text" placeholder="Votre nom"/>
            <input name="email" className="w-full rounnded border p-2"placeholder="Votre email" required type="email"/>
            <textarea name="message" placeholder="Votre message" className="w-full rounnded border p-2" cols={10} rows={5}>
            </textarea>
            <button className="w-full bg-green-600 text-white p-2 rounded outline-none hover:bg-green-700">
                Envoyer

            </button>
        </form>
    </main>
  )
}

export default page