import Logo from "./Logo"
import Nav from "./Nav"




const Header = () => {
  return (
    <div className="w-full p-4 flex justify-center items-center px-4  text-gray-100 font-medium fixed top-0 left-0 bg-red-600 opacity-1 z-20">

         <div className="w-full  gap-6 flex flex-col md:flex-row justify-center md:justify-between items-center ">
              <div className="flex w-full justify-between items-center">
                  <Logo/>
               
           
               <Nav/>
              </div>
             
              
             

         </div>
    </div>
  )
}

export default Header