import { motion } from "framer-motion"
import {
  Database, Layout, Cloud, LineChart, Users, Clock, MessageSquare, Target, Lightbulb
} from "lucide-react"
import { fadeUp, staggerContainer, staggerItem, viewportConfig, defaultTransition } from "../animations"

/* ── Core Stack ── */
const coreStack = [
  { name: "Python", context: "Data Analysis & ML", icon: "devicon-python-plain" },
  { name: "SQL", context: "Data Extraction", icon: "devicon-azuresqldatabase-plain" },
  { name: "TensorFlow", context: "Deep Learning", icon: "devicon-tensorflow-original" },
  { name: "Scikit-learn", context: "Machine Learning", icon: "devicon-scikitlearn-plain" },
  { name: "NLP", context: "Text Processing", icon: "devicon-google-plain" },
]

/* ── Technical Proficiencies ── */
const techGroups = [
  {
    title: "Machine Learning & AI",
    icon: <LineChart size={18} className="text-accent" />,
    skills: [
      { name: "NumPy", icon: "devicon-numpy-plain" },
      { name: "Pandas", icon: "devicon-pandas-plain" },
      { name: "Matplotlib", icon: "devicon-matplotlib-plain" },
      { name: "Seaborn", icon: "devicon-python-plain" },
    ],
  },
  {
    title: "Development",
    icon: <Layout size={18} className="text-accent" />,
    skills: [
      { name: "Streamlit", icon: "devicon-streamlit-plain" },
      { name: "Flask", icon: "devicon-flask-original" },
      { name: "React", icon: "devicon-react-original" },
      { name: "HTML5", icon: "devicon-html5-plain" },
      { name: "CSS3", icon: "devicon-css3-plain" },
    ],
  },
  {
    title: "Databases",
    icon: <Database size={18} className="text-accent" />,
    skills: [
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "SQLite", icon: "devicon-sqlite-plain" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Cloud size={18} className="text-accent" />,
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Google Colab", icon: "devicon-google-plain" },
    ],
  },
]

/* ── Soft Skills ── */
const softSkills = [
  { name: "Communication", icon: <MessageSquare size={14} /> },
  { name: "Leadership", icon: <Users size={14} /> },
  { name: "Time Management", icon: <Clock size={14} /> },
  { name: "Teamwork", icon: <Target size={14} /> },
  { name: "Problem Solving", icon: <Lightbulb size={14} /> },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-bg relative overflow-hidden transition-colors">
      {/* Watermark */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.8 }}
        className="watermark top-12 left-6 md:left-12"
      >
        SKILLS
      </motion.div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          transition={defaultTransition}
          className="mb-16"
        >
          <h2 className="section-title mb-3">Skills & Expertise</h2>
          <p className="section-subtitle max-w-2xl">
            I work across the full machine learning pipeline — from data processing to model training and deployment.
          </p>
        </motion.div>

        {/* Core Stack */}
        <div className="mb-16">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={defaultTransition}
            className="text-xs font-bold text-accent uppercase tracking-widest mb-6 font-space"
          >
            Core Stack
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {coreStack.map((s) => (
              <motion.div
                key={s.name}
                variants={staggerItem}
                whileHover={{ y: -6, scale: 1.04, transition: { duration: 0.2 } }}
                className="card p-5 flex flex-col items-center text-center cursor-default group border-accent/10"
              >
                <motion.div
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="w-12 h-12 rounded-xl bg-surface-alt border border-border flex items-center justify-center mb-4 group-hover:border-accent/30 group-hover:shadow-[0_0_12px_-4px_rgba(6,182,212,0.2)] transition-all"
                >
                  <i className={`${s.icon} text-2xl text-accent`} />
                </motion.div>
                <h4 className="text-sm font-bold text-heading mb-1">{s.name}</h4>
                <p className="text-xs text-muted">{s.context}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical Proficiencies */}
        <div className="mb-16">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={defaultTransition}
            className="text-xs font-bold text-muted uppercase tracking-widest mb-6 font-space"
          >
            Technical Proficiencies
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid md:grid-cols-2 gap-5"
          >
            {techGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={staggerItem}
                className="card p-6"
              >
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-border">
                  <div className="p-2 rounded-lg bg-accent/10">{group.icon}</div>
                  <h4 className="text-sm font-bold text-heading uppercase tracking-wider font-space">{group.title}</h4>
                </div>
                <div className="grid grid-cols-2 gap-y-3 gap-x-2">
                  {group.skills.map(skill => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ x: 4 }}
                      className="flex items-center gap-3 text-sm text-body group/skill hover:text-heading transition-colors cursor-default"
                    >
                      <i className={`${skill.icon} text-lg text-muted group-hover/skill:text-accent transition-colors`} />
                      <span className="font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Soft Skills */}
        <div>
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            transition={defaultTransition}
            className="text-xs font-bold text-muted uppercase tracking-widest mb-5 font-space"
          >
            Soft Skills
          </motion.h3>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-wrap gap-3"
          >
            {softSkills.map((s) => (
              <motion.div
                key={s.name}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm text-muted font-medium hover:text-heading hover:border-accent/20 transition-all cursor-default"
              >
                <span className="text-accent/60">{s.icon}</span>
                {s.name}
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
