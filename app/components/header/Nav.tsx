"use client"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const Nav = () => {
  const [show,setShow]=useState(false)
  return (
    <>
       <nav className=" hidden lg:flex">
      <ul className="flex justify-center items-center gap-4">
        <li>
          <Link className=" border-b border-b-transparent hover:border-b-gray-200 py-1" href="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className=" border-b border-b-transparent hover:border-b-gray-200 py-1" href="/regions-postales-maroc">
            
          régions Postales
                    </Link>
        </li>
        <li>
          <Link className=" border-b border-b-transparent hover:border-b-gray-200 py-1" href="/contact">
            
            Contact
          </Link>
        </li>
      </ul>
    </nav>
     {!show &&  <Menu size={32} onClick={()=>setShow(true)} className="block lg:hidden"/>}
     {show &&   <X size={32 } onClick={()=>setShow(false)} className="block lg:hidden"/>}

      {show && (
              <nav className="w-full fixed top-20 left-0 z-20 bg-red-600 border-b  shadow-md p-6 flex lg:hidden">
              <ul className="flex flex-col justify-start items-start   gap-4">
                <li>
                  <Link onClick={()=>setShow(false)} className=" border-b border-b-transparent hover:border-b-red-300 py-2" href="/">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link  onClick={()=>setShow(false)}  className=" border-b border-b-transparent hover:border-b-red-300 py-2" href="/regions-postales-maroc">
                    
                  régions Postales
                            </Link>
                </li>
                <li>
                  <Link  onClick={()=>setShow(false)} className=" border-b border-b-transparent hover:border-b-red-300 py-2" href="/contact">
                    
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
      )}
    </>
  )
}

export default Nav