import { Github, Linkedin, Menu, X, Download, Sun, Moon } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTheme } from "../ThemeContext"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
  { name: "Achievements", href: "#achievements" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection("#" + entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "-80px 0px -40% 0px" }
    )

    navLinks.forEach(link => {
      const el = document.querySelector(link.href)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-lg font-bold font-space text-heading">
          GC<span className="gradient-text">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(l => (
            <a
              key={l.name}
              href={l.href}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector(l.href);
                if (target) {
                  const y = target.getBoundingClientRect().top + window.scrollY - 80;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className={`relative px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                activeSection === l.href
                  ? "text-accent"
                  : "text-muted hover:text-heading"
              }`}
            >
              {l.name}
              {activeSection === l.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-accent rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-2">
          <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer"
            className="p-2 rounded-lg text-muted hover:text-heading hover:bg-surface-alt transition-all">
            <Github size={18} />
          </a>
          <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noreferrer"
            className="p-2 rounded-lg text-muted hover:text-accent transition-all">
            <Linkedin size={18} />
          </a>
          <div className="w-px h-5 bg-border mx-1" />
          <button onClick={toggle}
            className="p-2 rounded-lg text-muted hover:text-heading hover:bg-surface-alt transition-all"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggle} className="p-2 text-muted" aria-label="Toggle theme">
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button className="p-2 text-muted" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border overflow-hidden"
          >
            <div className="px-6 py-5 space-y-1">
              {navLinks.map(l => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    const target = document.querySelector(l.href);
                    if (target) {
                      const y = target.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === l.href
                      ? "text-accent bg-accent/5"
                      : "text-body hover:text-heading hover:bg-surface-alt"
                  }`}
                >
                  {l.name}
                </a>
              ))}
              <div className="pt-3 flex items-center gap-3 border-t border-border mt-3">
                <a href="https://github.com/chiru5190" target="_blank" rel="noreferrer" className="p-2 text-muted hover:text-heading"><Github size={18} /></a>
                <a href="http://www.linkedin.com/in/gedelachiranjeevi" target="_blank" rel="noreferrer" className="p-2 text-muted hover:text-accent"><Linkedin size={18} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
