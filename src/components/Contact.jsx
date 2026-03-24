import { motion } from "framer-motion"
import { Send, CheckCircle, Github, Linkedin, Mail } from "lucide-react"
import { useState, useRef } from "react"
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportConfig, defaultTransition } from "../animations"

export default function Contact() {
  const [status, setStatus] = useState("idle")
  const formRef = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus("sending")

    const data = new FormData(formRef.current)

    try {
      const res = await fetch("https://formspree.io/f/xyzabcde", {
        method: "POST", body: data, headers: { Accept: "application/json" }
      })
      if (res.ok) {
        setStatus("success")
        formRef.current.reset()
        setTimeout(() => setStatus("idle"), 5000)
      } else {
        setStatus("error")
        setTimeout(() => setStatus("idle"), 4000)
      }
    } catch {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 4000)
    }
  }

  const socialLinks = [
    { icon: <Mail size={18} />, label: "Email", value: "chiranjeevig552005@gmail.com", href: "mailto:chiranjeevig552005@gmail.com" },
    { icon: <Github size={18} />, label: "GitHub", value: "chiru5190", href: "https://github.com/chiru5190" },
    { icon: <Linkedin size={18} />, label: "LinkedIn", value: "gedelachiranjeevi", href: "http://www.linkedin.com/in/gedelachiranjeevi" },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg relative overflow-hidden transition-colors">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.8 }}
        className="watermark top-12 left-6 md:left-12"
      >
        CONTACT
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={defaultTransition}
          className="mb-16 text-center"
        >
          <h2 className="section-title mb-3">Get in Touch</h2>
          <p className="section-subtitle max-w-lg mx-auto">Open to internships and opportunities where I can build and improve real-world ML systems.</p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-4xl mx-auto items-stretch">

          {/* Left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={{ ...defaultTransition, duration: 0.6 }}
            className="flex-1 space-y-8 py-4"
          >
            <div>
              <h3 className="text-xl font-bold text-heading mb-4 font-space md:text-2xl">
                Looking to build or improve an AI/ML system?
                Let’s collaborate and turn ideas into working solutions.
              </h3>
              <p className="text-body leading-relaxed hidden">
                Whether you have a project idea, a question, or just want to connect — I'd love to hear from you.
              </p>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="space-y-4"
            >
              {socialLinks.map(link => (
                <motion.a
                  key={link.label}
                  variants={staggerItem}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
                  className="flex items-center gap-4 text-body hover:text-heading transition-colors group"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -8, 8, 0] }}
                    transition={{ duration: 0.4 }}
                    className="w-11 h-11 rounded-xl bg-surface border border-border flex items-center justify-center group-hover:border-accent/30 group-hover:shadow-[0_0_12px_-4px_rgba(6,182,212,0.2)] transition-all"
                  >
                    <span className="text-accent">{link.icon}</span>
                  </motion.div>
                  <div>
                    <p className="text-[10px] text-muted uppercase tracking-wider font-bold">{link.label}</p>
                    <p className="text-sm font-medium">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={{ ...defaultTransition, duration: 0.6, delay: 0.15 }}
            className="flex-[1.2] flex"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="card p-7 flex flex-col justify-between w-full">
              <div className="space-y-4 mb-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-heading ml-0.5">Name</label>
                    <input
                      type="text" name="name" required
                      className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm text-heading placeholder:text-muted/40 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-heading ml-0.5">Email</label>
                    <input
                      type="email" name="email" required
                      className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm text-heading placeholder:text-muted/40 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-heading ml-0.5">Message</label>
                  <textarea
                    name="message" rows="5" required
                    className="w-full bg-surface-alt border border-border rounded-xl px-4 py-3 text-sm text-heading placeholder:text-muted/40 focus:outline-none focus:border-accent focus:shadow-[0_0_0_3px_rgba(6,182,212,0.1)] transition-all resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center mt-auto">
                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm font-medium py-3"
                  >
                    <CheckCircle size={18} /> Message sent successfully!
                  </motion.div>
                ) : status === "error" ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-400 text-sm py-3"
                  >
                    Something went wrong. Try emailing directly.
                  </motion.div>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary btn-glow w-full max-w-[240px] flex items-center justify-center gap-2 py-3 disabled:opacity-50"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"} <Send size={16} />
                  </motion.button>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
