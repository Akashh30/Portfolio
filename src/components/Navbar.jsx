import {NavLink} from "react-router-dom"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import Contact from "../pages/Contact"

function Navbar(){
    return(
        <>
        <nav className="w-3/4 relative z-20 h-auto rounded-2xl p-6 mt-10 bg-white/10 image-fade">
          <div className="flex flex-row gap-4 md:gap-18 justify-center">
            <NavLink to="/Education"><span className="text-white text-xs md:text-lg cursor-pointer font-poppins hover:bg-linear-to-r hover:from-white/98 hover:via-white/80 hover:to-white/40 hover:bg-clip-text hover:text-transparent">Education</span></NavLink>
            <NavLink to="/Projects"><span className="text-white text-xs md:text-lg cursor-pointer font-poppins hover:bg-linear-to-r hover:from-white/98 hover:via-white/80 hover:to-white/40 hover:bg-clip-text hover:text-transparent">Projects</span></NavLink>
            <NavLink to="/Contact"><span className="text-white text-xs md:text-lg cursor-pointer font-poppins hover:bg-linear-to-r hover:from-white/98 hover:via-white/80 hover:to-white/40 hover:bg-clip-text hover:text-transparent">Contact</span></NavLink>  
          </div>
        </nav>
        </>
    )
}

export default Navbar