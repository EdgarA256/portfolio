import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Education } from "./components/Education";
import { Interests } from "./components/Interests";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Journey } from "./components/Journey";
import { Opportunities } from "./components/Opportunities";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Interests />
        <Skills />
        <Projects />
        <Journey />
        <Opportunities />
        <Contact />
      </main>
    </>
  );
}
