import { motion } from "framer-motion"
import { GraduationCap, Calendar } from "lucide-react"
import { fadeUp, viewportConfig, defaultTransition } from "../animations"

const education = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    institution: "Lovely Professional University, Punjab",
    duration: "August 2023 – Present",
    score: "CGPA: 7.94",
  },
  {
    degree: "Intermediate",
    institution: "Sri Chaitanya Junior College, Vijayawada",
    duration: "June 2022 – May 2023",
    score: "Percentage: 94.3%",
  },
  {
    degree: "Secondary School",
    institution: "ZP High School, Vakatippa",
    duration: "August 2020 – May 2021",
    score: "Percentage: 90.5%",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-bg relative overflow-hidden transition-colors">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.8 }}
        className="watermark top-12 left-6 md:left-12"
      >
        EDUCATION
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
          <h2 className="section-title mb-3">Education</h2>
          <p className="section-subtitle max-w-xl">Academic foundation supporting technical expertise.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={viewportConfig}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-6 md:left-8 top-0 w-px bg-border origin-top"
          />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewportConfig}
                transition={{ duration: 0.5, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot — pops in */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={viewportConfig}
                  transition={{ duration: 0.3, delay: i * 0.15 + 0.2, type: "spring", stiffness: 300 }}
                  className="absolute left-4 md:left-6 top-5 w-4 h-4 rounded-full bg-surface border-2 border-accent/50 z-10"
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="card p-5 md:p-6 group hover:border-accent/15"
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Left */}
                    <div className="flex items-start gap-3">
                      <GraduationCap size={18} className="text-accent shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-base font-bold text-heading font-space leading-tight group-hover:text-accent transition-colors">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-body mt-0.5">{edu.institution}</p>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="text-right shrink-0">
                      {edu.score && (
                        <p className="text-sm font-semibold text-accent">{edu.score}</p>
                      )}
                      <div className="flex items-center justify-end gap-1.5 text-xs text-muted font-medium mt-1">
                        <Calendar size={11} className="opacity-70" />
                        {edu.duration}
                      </div>
                    </div>
                  </div>

                  {edu.coursework && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={viewportConfig}
                      transition={{ delay: i * 0.15 + 0.3 }}
                      className="flex flex-wrap gap-2 mt-4 ml-[30px]"
                    >
                      {edu.coursework.map(c => (
                        <span key={c} className="px-2.5 py-1 text-[11px] font-medium text-muted bg-surface-alt border border-border rounded-md">
                          {c}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
