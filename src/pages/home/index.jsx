import { useState } from "react";
import Abilities from "./components/Abilities";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
    const [isDark] = useState(false);

    return (
        <div>
            <Abilities />
            <Skills />
            <Projects dark={isDark} />
        </div>
    )
}
