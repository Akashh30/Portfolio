import Footer from "../components/Footer"

function Contact(){
    return(
        <>
        <section className="bg-black/90 min-h-screen flex justify-center">
           
              <div className="bg-white/10 w-5xl h-auto text-center flex flex-col items-center image-fade pb-5">
                 <form action="">
                  <div className="flex flex-col gap-6 max-[550px]:gap-4">
                    <br />
                    <h1 className="bg-linear-to-r from-white/40 via-white to-white/98 bg-clip-text text-transparent text-3xl font-bold font-poppins max-[650px]:text-3xl">Share Your Message</h1>
                    <div className="flex flex-row items-center gap-2 max-[650px]:flex-col max-[650px]:items-start">
                    <label htmlFor="name" className="text-xl text-white">Name:-</label>
                    <input type="text" placeholder="enter your name" className="border-2 border-white/50 rounded-lg p-2 w-sm max-[650px]:w-full ml-12 max-[650px]:ml-0 placeholder-white/50"/> <br />
                    </div>

                    <div className="flex flex-row items-center gap-2 max-[650px]:flex-col max-[650px]:items-start">
                    <label htmlFor="message" className="text-xl text-white/60">Message:-</label>
                    <textarea type="message" className="border-2 border-white/30 rounded-lg max-[650px]:w-full ml-6 w-sm max-[650px]:ml-0 h-[200px]"/>
                    </div>

                    <button className="bg-linear-to-r from-white/20 via-white/50 to-white bg-clip-text text-transparent text-2xl border-2 border-white/30 px-5 py-2.5 w-full mt-5 rounded-lg font-poppins font-medium hover:text-white/75">Submit</button>

                    </div>
                    
                 </form> 
                 <div className="pt-20">
                    <h1 className="text-white text-xl font-poppins font-medium">Get in touch:- <br className="hidden max-[650px]:block"/><span className="text-base font-dancing">Akash Nair | akash30nair@gmail.com</span></h1>
                </div>
              </div>

              
        </section>
        <Footer/>
        </>
    )
}

export default Contact