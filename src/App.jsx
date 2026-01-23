import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
import BackgroundLayer from "./components/layout/BackgroundLayer";
export default function App() {
    return (
        <div className="bg-gray-950 text-white">
            <BackgroundLayer />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}