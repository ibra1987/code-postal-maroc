import Logo from "./Logo"
import Nav from "./Nav"




const Header = () => {
  return (
    <div className="w-full   flex justify-center items-center py-4  text-gray-700 font-medium ">

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