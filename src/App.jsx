import Contact from "./pages/Contact"
import Education from "./pages/Education"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import {Route, Routes} from "react-router-dom"

function App(){
  return(
    <>
    <Home/>
    <Routes>
       <Route path="/" element={<Education/>}/>
       <Route path="/Portfolio/" element={<Education/>}/>
       <Route path="/Education" element={<Education/>} />
       <Route path="/Projects" element={<Projects/>}/>
       <Route path="/Contact" element={<Contact/>}/>
    </Routes> 
    </>
  )
}

export default App