import Image from "next/image"
import Link from "next/link"




const Logo = () => {
  return (
    <div className="flex text-xs   justify-center items-center bg-gradient-to-r from-emerald-600 via-emerald-700 to-red-600 px-1 py-0 rounded text-white">
       <Link className="w-full flex justify-center items-center" href={"/"}>
      <div>
       
        <Image alt="carte-maroc" src="/images/carte_maroc.png" width={40}  height={40} />
      </div>
      <span >
        Code Postal Maroc
      </span>
      </Link>

    </div>
  )
}

export default Logo