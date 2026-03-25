import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { Briefcase, Award, Code2, Lightbulb } from "lucide-react"
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportConfig, defaultTransition } from "../animations"

const stats = [
  { icon: <Code2 size={20} />, value: 3, suffix: "+", label: "Deployed Solutions" },
  { icon: <Award size={20} />, value: 5, suffix: "+", label: "Certifications" },
  { icon: <Briefcase size={20} />, value: 3, suffix: "", label: "Tech Domains" },
  { icon: <Lightbulb size={20} />, value: 300, suffix: "+", label: "Problems Solved" },
]

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const end = value
    const duration = 1500
    const step = Math.max(1, Math.floor(end / (duration / 16)))
    const timer = setInterval(() => {
      start += step
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface relative overflow-hidden transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Bio */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={{ ...defaultTransition, duration: 0.6 }}
          >
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              transition={defaultTransition}
              className="section-title mb-6"
            >
              About Me
            </motion.h2>
            <div className="space-y-4 text-body text-base leading-relaxed">
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ ...defaultTransition, delay: 0.1 }}
              >
                I build machine learning systems from data ingestion to deployment.
              </motion.p>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ ...defaultTransition, delay: 0.2 }}
              >
                My work focuses on NLP pipelines, ETL workflows, and integrating ML models into web applications using tools like Flask and Streamlit.
              </motion.p>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ ...defaultTransition, delay: 0.3 }}
              >
                I prioritize writing clean, maintainable code and designing systems that can move from experimentation to usable applications.
              </motion.p>
              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                transition={{ ...defaultTransition, delay: 0.4 }}
              >
                My projects focus on solving practical problems like automating data workflows and building real-time prediction systems.
I’m currently improving how I design, structure, and deploy ML systems to make them more reliable and usable.
              </motion.p>
            </div>
          </motion.div>

          {/* Right — Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.03, transition: { duration: 0.2 } }}
                className="card p-5 flex flex-col items-start cursor-default group"
              >
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                  className="p-2 rounded-lg bg-accent/10 text-accent mb-3 group-hover:bg-accent/15 transition-colors"
                >
                  {stat.icon}
                </motion.div>
                <div className="text-2xl md:text-3xl font-bold font-space text-heading mb-1">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs font-medium text-muted uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
