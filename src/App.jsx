import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import "./index.css";
function App(){
    return(
        <>
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Contacts />
        </>
    )
}
export default App;