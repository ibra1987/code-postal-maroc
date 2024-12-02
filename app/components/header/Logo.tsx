import Image from "next/image"




const Logo = () => {
  return (
    <div className="flex text-xs md:text-base  justify-center items-center bg-gradient-to-r from-green-800 to-red-600 p-2 py-0 rounded text-white">
      <div>
        <Image alt="carte-maroc" src="/images/carte_maroc.png" width={40}  height={40} />
      </div>
      <span >
        Code Postaux Maroc
      </span>
    </div>
  )
}

export default Logo