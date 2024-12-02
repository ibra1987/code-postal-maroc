import Search from "../Search"
import Logo from "./Logo"
import Nav from "./Nav"




const Header = () => {
  return (
    <div className="w-full p-4 flex justify-center items-center">

         <div className="w-full  gap-6 flex justify-between items-center mb-24">
               <Logo/>
               
                 <Search/>
              <Nav/>
             

         </div>
    </div>
  )
}

export default Header