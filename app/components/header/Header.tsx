import SearchFormWrapper from "../SearchFormWrapper"
import Logo from "./Logo"
import Nav from "./Nav"




const Header = () => {
  return (
    <div className="w-full   flex justify-center items-center py-4  text-gray-700 font-medium ">

         <div className="w-full  gap-2 flex flex-col md:flex-row justify-center md:justify-between items-center ">
              <div className="flex w-full justify-between items-center">
                  <Logo/>
                  <div className="flex-grow hidden md:flex">
                  <SearchFormWrapper/>
                  </div>
               <Nav/>
              </div>
              <div className=" w-full md:hidden">
                <SearchFormWrapper/>
              </div>
             
              
             

         </div>
    </div>
  )
}

export default Header