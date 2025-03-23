


import { MongoClient, ServerApiVersion }  from "mongodb";




const dbClient = async ()=>{
    const uri = process.env.MONGO_URI!;
    if(!uri) return
    const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
)
return client
};


export default dbClient