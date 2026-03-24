import { motion } from "framer-motion"
import { Cpu, Code2, Trophy } from "lucide-react"
import { fadeUp, staggerContainer, staggerItem, viewportConfig, defaultTransition } from "../animations"

const achievements = [
  {
    title: "Prompt-Driven AI Workflow Development",
    description: "Built end-to-end AI workflows using Model Context Protocol tools — Cursor IDE, Pipedream, and MCP Servers — delivering functional automation in a hands-on environment.",
    icon: <Cpu size={20} />,
  },
  {
    title: "Generative AI Application Development",
    description: "Developed a functional Generative AI application during an industry-level workshop, applying prompt engineering and API integration under professional guidance.",
    icon: <Code2 size={20} />,
  },
  {
    title: "Problem Solving & DSA Consistency",
    description: "Solved 300+ DSA problems across NxtWave and LeetCode, building strong foundations in algorithms, data structures, and systematic problem-solving patterns.",
    icon: <Trophy size={20} />,
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32 bg-surface relative overflow-hidden transition-colors">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.8 }}
        className="watermark top-12 left-6 md:left-12"
      >
        ACHIEVEMENTS
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={defaultTransition}
          className="mb-14"
        >
          <h2 className="section-title mb-3">Achievements</h2>
          <p className="section-subtitle max-w-xl">Proof of execution, consistency, and real capability.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-3 gap-5"
        >
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              variants={staggerItem}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`card p-6 cursor-default group ${i === 0 ? "border-accent/20" : ""}`}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
                className="p-2.5 rounded-xl bg-accent/10 text-accent w-fit mb-5 group-hover:bg-accent/15 group-hover:shadow-[0_0_16px_-4px_rgba(6,182,212,0.2)] transition-all"
              >
                {a.icon}
              </motion.div>
              <h3 className="text-base font-bold text-heading mb-2 font-space group-hover:text-accent transition-colors leading-tight">
                {a.title}
              </h3>
              <p className="text-sm text-body leading-relaxed">
                {a.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
