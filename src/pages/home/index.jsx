import { useState } from "react";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Slider from "./components/Slider";
import Experience from "./components/Experience";

export default function Home() {
    const [isDark] = useState(false);

    return (
        <div>
            <Slider />
            <Skills />
            <Experience />
            <Projects dark={isDark} />
        </div>
    )
}
