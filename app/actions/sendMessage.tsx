"use server"

import * as z from "zod"
import { Resend } from "resend"
const MessageSchema = z.object({
    name:z.string().min(1,{message:"Merci de fournir votre nom"}),
    email:z.string().email({message:"Merci de fournir une addresse email valide"}),
    message:z.string().min(4,{message:"Merci de spécifier votre message."})
})



export async function sendMessage(previousState:unknown,formdata:FormData) {

    const name = formdata.get("name") as string
    const email = formdata.get("email")  as string
    const message = formdata.get("message") as string

    if(!email || !name || !message){
        return {
            error:"Merci de remplir tousl les champs."
        }
    }
    const validationResult = await MessageSchema.safeParseAsync({name,email,message})
    if(!validationResult.success){
        return {
            error:validationResult.error.errors[0].message
        }
    }

    try {
   const resend = new Resend(process.env.RESEND_API_KEY!)

   resend.emails.send({
       from:"team@lamineyamal.io",
       to:"brahimdriouch.dev@gmail.com",
       subject:`New email from ${email}`,
       text:`Nom: ${name} \nEmail: ${email} \nMessage: ${message}`
   })
       
          return {
            success:true
          }

    } catch (error) {
        console.log(error)
        return {
            error:"Une erreur est survenue"
        }
    }
    
}