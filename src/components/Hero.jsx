import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

const techTags = ["Python", "Machine Learning", "NLP"]

const socialLinks = [
  { icon: <Github size={18} />, href: "https://github.com/chiru5190", label: "GitHub" },
  { icon: <Linkedin size={18} />, href: "http://www.linkedin.com/in/gedelachiranjeevi", label: "LinkedIn" },
  { icon: <Mail size={18} />, href: "mailto:chiranjeevig552005@gmail.com", label: "Email" },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[140px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-semibold text-accent tracking-wide">Building real-world ML applications</span>
            </motion.div>

            {/* Name Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5"
            >
              <p className="text-base md:text-lg text-muted font-medium mb-1 tracking-wide">
                Hi, I'm
              </p>
              <h1 className="font-space text-[3.2rem] md:text-[4rem] lg:text-[4.5rem] font-extrabold tracking-tight leading-[1.05]">
                <span className="gradient-text">Gedela Chiranjeevi</span>
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg md:text-xl lg:text-[1.35rem] font-medium leading-[1.5] mb-3 text-heading/90 max-w-lg"
            >
              Built and deployed ML models (NLP & classification) with Flask APIs, handling real-time predictions and automated data pipelines.
            </motion.p>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-muted text-sm md:text-base leading-relaxed max-w-md mb-8"
            >
              Focused on making models usable beyond notebooks through APIs and real-world workflows.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              <a href="#projects" className="btn-primary btn-glow flex items-center gap-2 group">
                View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-2">
                <Download size={16} /> Resume
              </a>
            </motion.div>

            {/* Social Icons + Tech Stack inline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex items-center gap-5"
            >
              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={s.href.startsWith("mailto") ? undefined : "noreferrer"}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.85 + i * 0.08 }}
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="p-2.5 rounded-xl border border-border text-muted hover:text-accent hover:border-accent/30 hover:shadow-[0_0_16px_-4px_rgba(6,182,212,0.25)] transition-all duration-300"
                    aria-label={s.label}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="w-px h-8 bg-border" />

              {/* Tech Stack Tags */}
              <div className="flex items-center gap-2.5 flex-wrap">
                {techTags.map((tag, i) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1 + i * 0.06 }}
                    className="text-[11px] font-semibold text-muted/70 bg-surface border border-border rounded-lg px-2.5 py-1 tracking-wide uppercase hover:border-accent/30 hover:text-accent/80 transition-colors"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right — Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/15 to-purple-500/15 blur-3xl scale-110 animate-glow-pulse" />

              {/* Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="card p-3 rounded-2xl overflow-hidden group">
                  <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-xl overflow-hidden">
                    <img
                      src="/profile.png"
                      alt="Gedela Chiranjeevi"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface to-transparent" />
                  </div>
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                    <div className="glass px-4 py-1.5 rounded-full">
                      <span className="text-xs font-semibold text-accent font-space tracking-wide">AI/ML Developer</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
