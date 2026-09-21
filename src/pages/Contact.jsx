import Footer from "../components/Footer"
import { useActionState, useEffect} from 'react'

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyJNCjVuse7uwuer-UDQPS5dFGlAnipbSSqMrKs75pP1k3XBuvhnfNjaOakmXJNxMU5Vw/exec";

async function validateForm(previousState, formData) {

    const name = formData.get("name") || "";
    const message = formData.get("message") || "";

    let nameError = "";
    let messageError = "";

    // Name validation
    if (!name.trim()) {
        nameError = "Name is required";
    } 
    else if (name.length > 50) {
        nameError = "Name cannot be more than 50 characters";
    } 
    else if (/\d/.test(name)) {
        nameError = "Name cannot contain numbers";
    }

    // Message validation
    if (!message.trim()) {
        messageError = "Message is required";
    } 
    else if (message.length > 200) {
        messageError = "Message cannot be more than 200 characters";
    }

    // If there are errors
    if (nameError || messageError) {
        return {
            nameError,
            messageError,
            success: false
        };
    }

    try {

        await fetch(SCRIPT_URL, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "text/plain;charset=utf-8"
            },
            body: JSON.stringify({
                name: name.trim(),
                message: message.trim()
            })
        });

        return {
            nameError: "",
            messageError: "",
            success: true
        };

    } catch (error) {

        console.error("Google Sheet error:", error);

        return {
            nameError: "",
            messageError: "Something went wrong. Please try again.",
            success: false
        };
    }
}


function Contact(){
    const [state, formAction, isPending]=useActionState(
        validateForm,
        {
            nameError:"",
            messageError:"",
            success:false
        }
    )

    useEffect(()=>{
        if(state.success){
            alert("Message sent sucessfully!")
        }
    }, [state.success]);
    
    return(
        <>
        <section className="bg-black/90 min-h-screen flex justify-center">
           
              <div className="bg-white/10 w-5xl h-auto text-center flex flex-col items-center image-fade pb-5">
                 <form action={formAction}>
                  <div className="flex flex-col gap-6 max-[550px]:gap-4">
                    <br />
                    <h1 className="bg-linear-to-r from-white/40 via-white to-white/98 bg-clip-text text-transparent text-3xl font-bold font-poppins max-[650px]:text-3xl">Share Your Message</h1>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 max-[650px]:flex-col max-[650px]:items-start">
                            <label htmlFor="name" className="text-xl text-white">
                                Name:-
                            </label>
                            <input type="text" id="name" name="name" placeholder="enter your name" className="border-2 border-white/50 rounded-lg p-2 w-sm max-[650px]:w-full ml-12 max-[650px]:ml-0 placeholder-white/50"/>
                        </div>
                        {state.nameError && (<p className="text-red-400 text-xs text-center ml-12 max-[650px]:ml-0">{state.nameError}</p>)}
                    </div>

                    

                    <div className="flex flex-col gap-1">
                        <div className="flex flex-row items-center gap-2 max-[650px]:flex-col max-[650px]:items-start">
                            <label htmlFor="message" className="text-xl text-white/60">
                            Message:-
                            </label>
                            <textarea
                            id="message"
                            name="message"
                            className="border-2 border-white/30 rounded-lg max-[650px]:w-full ml-6 w-sm max-[650px]:ml-0 h-[200px]"
                            />
                        </div>
                        {state.messageError && (<p className="text-red-400 text-sm text-center ml-6 max-[650px]:ml-0">{state.messageError}</p>)}
                        </div>
                    <button className="bg-linear-to-r from-white/20 via-white/50 to-white bg-clip-text text-transparent text-2xl border-2 border-white/30 px-5 py-2.5 w-full mt-5 rounded-lg font-poppins font-medium hover:text-white/75" type="submit" disabled={isPending}>{isPending ? "Submitting...":"Submit"}</button>

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