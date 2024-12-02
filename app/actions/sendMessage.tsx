"use server"

import * as z from "zod"
// import nodemailer from "nodemailer"
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

        // const transporter = nodemailer.createTransport({
        //     host: "smtp.gmail.com", // e.g., "smtp.gmail.com"
        //     port: 587, // For TLS
        //     secure: false, // True for 465, false for other ports
        //     auth: {
        //       user: "     ", // Your email address
        //       pass: "", // Your email password or app password
        //     },
        //   });

        //   const mailOptions = {
        //     from: `"${name}" <${email}>`, // Sender address
        //     to: "brahimdriouch.dev@gmail.com", // Your receiving email address
        //     subject: "New Contact Form Submission",
        //     text: message, // Plain text body
        //     html: `<p><strong>From:</strong> ${name} (${email})</p>
        //            <p><strong>Message:</strong></p>
        //            <p>${message}</p>`, // HTML body
        //   };
        //   await transporter.sendMail(mailOptions);

        // register message 
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