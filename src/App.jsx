import About from "./components/layout/About";
import Projects from "./components/layout/Projects";
import Hero from "./components/layout/Hero";
import Navbar from "./components/layout/Navbar";
import Contact from "./components/layout/Contact";
import Footer from "./components/layout/Footer";
export default function App() {
    return (
        <div className="bg-gray-950 text-white">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}