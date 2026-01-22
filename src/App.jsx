import Intro from "./sections/Intro/Intro";
import About from "./sections/About/About";
import TableOfContent from "./sections/TableOfContent/TableOfContent";
import Projects from "./sections/Projects/Projects"
import Thanks from "./sections/Thanks/Thanks";

export default function App() {
    return (
        <div>
            <Intro />
            <About />
            <TableOfContent />
            <Projects />
            <Thanks />
        </div>
    );
}