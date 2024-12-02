import HeroButton from "./HeroButton"



const Hero = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-6">
      <h1 className="text-5xl text-center    font-black">Retrouvez tous les <span className="text-red-500"> codes postaux du Maroc</span> </h1>
    <p className="w-full md:w-4/5">
      <span className="font-bold text-gray-600  ">Code Postaux Maroc</span> est une application qui vous permet de retrouver tous les codes postaux du Maroc.
      Cet outil vous permet de retrouver le code postal de votre ville ou de votre localité , mais aussi de votre agence postale.
    </p>
 
    </div>
  )
}

export default Hero