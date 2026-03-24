import { ThemeProvider } from "./ThemeContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certificates from "./components/Certificates"
import Achievements from "./components/Achievements"
import Education from "./components/Education"
import Contact from "./components/Contact"

export default function App() {
  return (
    <ThemeProvider>
      <div className="bg-bg min-h-screen transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Education />
        <Contact />
        <footer className="py-8 text-center text-sm text-muted border-t border-border bg-surface transition-colors">
          <div className="max-w-6xl mx-auto px-6">
            © {new Date().getFullYear()} Gedela Chiranjeevi. Built with intention.
          </div>
        </footer>
      </div>
    </ThemeProvider>
  )
}
