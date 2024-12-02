"use client"

import { useState } from "react"
import FloatingSearch from "./FloatingSearch"



const HeroButton = () => {
    const [show,setShow]=useState(false)
    
    const close = ()=>{
        setShow(false)
    }
  return (
    <div>
        <button onClick={()=>setShow(true)} className="text-white bg-green-800 rounded outline-none text-xl font-bold p-2 px-4">
    Rechercher
   </button>
 {show &&     <FloatingSearch close={close}/>

 }
    </div>
  )
}

export default HeroButton