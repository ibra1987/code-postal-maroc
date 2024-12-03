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
          <Link className="hover:text-green-700" href="/">
            Accueil
          </Link>
        </li>
        <li>
          <Link className="hover:text-green-700" href="/regions-postales-maroc">
            
          régions Postales
                    </Link>
        </li>
        <li>
          <Link className="hover:text-green-700" href="/contact">
            
            Contact
          </Link>
        </li>
      </ul>
    </nav>
     {!show &&  <Menu size={32} onClick={()=>setShow(true)} className="block lg:hidden"/>}
     {show &&   <X size={32 } onClick={()=>setShow(false)} className="block lg:hidden"/>}

      {show && (
              <nav className="w-full fixed top-20 left-0 z-20 bg-white border-b  shadow-md p-6 flex lg:hidden">
              <ul className="flex flex-col justify-start items-start   gap-4">
                <li>
                  <Link onClick={()=>setShow(false)} className="hover:text-green-600" href="/">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link  onClick={()=>setShow(false)}  className="hover:text-green-600" href="/regions-postales-maroc">
                    
                  régions Postales
                            </Link>
                </li>
                <li>
                  <Link  onClick={()=>setShow(false)}  className="hover:text-green-600" href="/contact">
                    
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