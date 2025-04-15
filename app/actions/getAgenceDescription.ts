"use server"

import dbClient from "@/db/client"
import { WithId } from "mongodb";





interface AgenceDescription {
    agence: string;
    description:string

}
type Status = "error" | "success"
interface ActionResponse<T> {
    status:Status;
    data:T;
    message?:string
}
export async function  getAgenceDescription(name:string):Promise<ActionResponse<AgenceDescription | null>> {
    const client =  await  dbClient()
    


    try {
        if (!client) {
            throw new Error("Database client is undefined.");
        }
        await client.connect();
        const queryResponse = await client.db("code_postal_db").collection("descriptions").findOne<WithId<AgenceDescription>  | null | undefined>({agence:name})
       if(queryResponse){
        await client?.close()
           return {
            status:"success",
            data:{
                agence:queryResponse.agence,
                description:queryResponse.description
            }
           }
      }else {
        await client?.close()
        return  {
            status:"error",
            data:null
        }
      }
    // else {

    //     const openai = new OpenAI({apiKey:process.env.OPENAI_KEY!})
    //     const aiResponse = await openai.chat.completions.create({
    //      model: "gpt-4-turbo",
    //      messages: [
    //          { role: "system", content: "You are a helpful assistant." },
    //          { role: "user", content: `Je veux une decription de la ville/region  ${name} si pas d'informations après avoir recherché sur le web, parle de  ${province}  dans 600 charactères max avec l'aspect SEO en tete . Ne dit pas que tu n'as rien trouvez ou peu d'information. si C'est le cas parle directment de ${province} en mentionnant que l'agence postale ${name} fait partie des agences de la province postale ${province}, cette phrase doit etre au debut pour un bon referencement SEO.  ` }
    //      ]
    //     });
 
    //     const responseContent = aiResponse.choices[0]?.message?.content;
      
    //     if (!responseContent) {
    //         return {
    //            status:"error",
    //            message:"Error",
    //            data:null
    //         }
    //     }
 
    //     console.log("hit")
     
    //     await client.db("code_postal_db").collection("descriptions").insertOne({
    //      agence:name,
    //      description:responseContent
    //     })
    //     return {
    //      status:"success",
    //      data:{
    //          agence:name,
    //          description:responseContent
    //      }
    //     }
    //    }
      

      
    } catch (error) {
        console.log(error)
        await client?.close()
         return {
            status:"error",
            data:null,
            message:"There was an error."
         }
    } 
}