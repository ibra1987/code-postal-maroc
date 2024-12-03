import Search from "../Search"
import Logo from "./Logo"
import Nav from "./Nav"




const Header = () => {
  return (
    <div className="w-full p-4 flex justify-center items-center px-4">

         <div className="w-full  gap-6 flex flex-col md:flex-row justify-center md:justify-between items-center mb-12">
              <div className="flex w-full justify-between items-center">
                  <Logo/>
               
               <div className="w-1/2 hidden md:flex justify-center items-center">
               <Search/>
               </div>
               <Nav/>
              </div>
              <div className="md:hidden w-full">
                <Search/> 
              </div>
              
             

         </div>
    </div>
  )
}

export default Header