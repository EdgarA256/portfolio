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
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-bg"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
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
