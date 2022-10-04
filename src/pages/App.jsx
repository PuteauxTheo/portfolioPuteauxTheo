import About from "../components/About";
import DisplayProject from "../components/DisplayProjects";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Skills from "../components/Skills";

export default function App(){
    return (
        <div id="app">
            <Header/>
            <About/>
            <Skills/>
            <DisplayProject/>
            <Footer/>
        </div>
    )
}