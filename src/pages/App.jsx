import About from "../components/About";
import DisplayProject from "../components/DisplayProjects";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function App(){
    return (
        <div id="app">
            <Header/>
            <About/>
            <DisplayProject/>
            <Footer/>
        </div>
    )
}