import { motion } from "framer-motion"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

const techTags = ["Python", "Machine Learning", "NLP", "AWS", "React"]

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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-muted">Available for AI/ML roles</span>
            </motion.div>

            {/* Headline — word-by-word reveal */}
            <h1 className="font-space text-4xl md:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.12] mb-5 text-heading">
              {["Building", "intelligent"].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="inline-block gradient-text mr-[0.3em]"
              >
                AI systems
              </motion.span>
              {["that", "deliver", "real-world", "impact."].map((word, i) => (
                <motion.span
                  key={word}
                  initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.5, delay: 0.45 + i * 0.08 }}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-body text-base md:text-lg leading-relaxed max-w-lg mb-8"
            >
              Focused on NLP, data pipelines, and production-ready machine learning applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a href="#projects" className="btn-primary btn-glow flex items-center gap-2 group">
                View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a href="/resume.pdf" download className="btn-outline flex items-center gap-2">
                <Download size={16} /> Resume
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="flex items-center gap-3 mb-10"
            >
              {socialLinks.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noreferrer"}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.95 + i * 0.08 }}
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="p-2.5 rounded-xl border border-border text-muted hover:text-accent hover:border-accent/30 hover:shadow-[0_0_16px_-4px_rgba(6,182,212,0.25)] transition-all duration-300"
                  aria-label={s.label}
                >
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* Tech Stack Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              className="flex items-center gap-3 flex-wrap"
            >
              <span className="text-[10px] font-bold text-muted uppercase tracking-widest font-space">Tech Stack:</span>
              {techTags.map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 1.15 + i * 0.06 }}
                  className="flex items-center gap-2 text-xs text-muted/80 font-medium"
                >
                  {i > 0 && <span className="text-border">•</span>}
                  {tag}
                </motion.span>
              ))}
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
                      <span className="text-xs font-semibold text-accent font-space tracking-wide">AI/ML Engineer</span>
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
