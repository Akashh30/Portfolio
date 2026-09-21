import facebook from "../assets/images/facebookk.png"
import instaa from "../assets/images/instaa.png"
import linkedin from "../assets/images/linkedinn.png"
import twitter from "../assets/images/twiterr.png"
import { NavLink } from "react-router-dom"


function Footer(){
    return(
        <>
        <footer className="bg-black/90 p-10">
            <div className="flex flex-row justify-between max-[550px]:justify-center w-full">
                <div className="flex flex-row items-center gap-6 pl- 2 block max-[550px]:hidden">
                    <NavLink to="/Education"><span className="text-sm text-white font-dancing cursor-pointer hover:bg-linear-to-r hover:from-white/98 hover:via-white/80 hover:to-white/40 hover:bg-clip-text hover:text-transparent">Education</span></NavLink>
                    <NavLink to="/Projects"><span className="text-sm text-white font-dancing cursor-pointer hover:bg-linear-to-r hover:from-white/98 hover:via-white/80 hover:to-white/40 hover:bg-clip-text hover:text-transparent">Projects</span></NavLink>
                    <NavLink to="/Contact"><span className="text-sm text-white font-dancing cursor-pointer hover:bg-linear-to-r hover:from-white/98 hover:via-white/80 hover:to-white/40 hover:bg-clip-text hover:text-transparent">Contact</span></NavLink>
                </div>
                 
                <div className="flex flex-col gap-1">
                   <div className="flex flex-row gap-2 pr-10 max-[550px]:pr-0 items-center">
                    <span><a href="https://www.instagram.com/akashnair_01/"><img src={instaa} alt="" className="w-[25px] cursor-pointer"/></a></span>
                    <span><a href="https://www.facebook.com/share/1HF7GUdfZA/"><img src={facebook} alt="" className="w-[25px] cursor-pointer"/></a></span>
                    <span><a href="https://www.twiter.com"><img src={twitter} alt="" className="w-[20px] cursor-pointer"/></a></span>
                    <span><a href="https://www.linkedin.com/in/akash-nair-1163ab28a/"><img src={linkedin} alt="" className="w-[20px] cursor-pointer"/></a></span>
                    </div>
                    <div>
                        <span className="text-xs bg-linear-to-r from-white/40 via-white to-white/98 bg-clip-text text-transparent font-poppins font-medium">Akash Nair @ 2026</span>
                    </div>
                 </div>
                
            </div>
        </footer>
        </>
    )
}

export default Footer