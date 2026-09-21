import bgcover1 from "../assets/images/bg-cover1.png"
import profilepic from "../assets/images/profile-photo-2.jpeg"
import Navbar from "../components/Navbar"
import batman from "../assets/images/batman.avif"



function Home(){
    return(
        <>
        <section className="relative h-auto">
            <div className="absolute inset-0 bg-black/90"></div>
            <main className="relative z-10 px-2">
                <div className="w-full h-[38vh]">
                    <img src={bgcover1} className="w-full h-full object-cover rounded-lg image-fade" alt="" />
                </div>
                <div className="w-xl p-8 block max-[900px]:hidden">
                    <h1 className="bg-linear-to-r from-white/40 via-white to-white/98 bg-clip-text text-transparent text-lg lg:text-2xl font-bold font-poppins">Hello, I'm Akash Nair</h1>
                    <h1 className="bg-linear-to-r from-white via-white to-white/20 bg-clip-text text-transparent text-lg lg:text-2xl font-bold pl-18 font-poppins">Mumbai based Software Developer</h1>
                </div>
                <div className="w-45 h-45 rounded-full bg-white absolute right-50 top-50 max-[900px]:static max-[900px]:mx-auto max-[900px]:-mt-10">
                    <img src={batman} className="w-full h-full rounded-full object-cover" alt="" />
                    <span className="relative top-0">
                    <pre className="font-dancing bg-linear-to-r from-white/40 via-white to-white/98 bg-clip-text text-transparent">Fail a thousands times,<br/>             but dont giveup.</pre>    
                </span>
                </div>
                 <div className="w-full p-8 pb-10 pt-20 hidden max-[900px]:block">
                    <h1 className="bg-linear-to-r from-white/40 via-white to-white/98 bg-clip-text text-transparent text-sm lg:text-2xl font-bold font-poppins">Hello, I'm Akash Nair</h1>
                    <h1 className="bg-linear-to-r from-white via-white/50 to-white/20 bg-clip-text text-transparent text-sm lg:text-2xl font-bold font-poppins">Mumbai based Software Developer</h1>
                    </div>
                
            </main>
            
            <nav className="flex justify-center">
               <Navbar/>
            </nav>
          
           
        </section>
        
        </>
    )
}

export default Home