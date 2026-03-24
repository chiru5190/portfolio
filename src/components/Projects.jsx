import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, CheckCircle2, TrendingUp, AlertTriangle, Image as ImageIcon } from "lucide-react"
import Modal from "./ui/Modal"
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportConfig, defaultTransition } from "../animations"

const projects = [
  {
    title: "Stock Market Data Pipeline",
    subtitle: "ETL Engineering & SQL Analytics",
    summary: "Built an automated ETL pipeline to extract, process, and analyze stock market data.",
    image: "/projects/stock-pipeline.png",
    overview: "Designed a data pipeline that fetches daily financial data from APIs, cleans and transforms it using Pandas, and stores it in SQLite for analysis.",
    solution: "Implemented SQL-based analytics including moving averages and trend calculations for reporting.",
    features: [
      "Automating data ingestion and transformation",
      "Structuring raw JSON data into usable formats",
      "Building reusable data processing workflows",
    ],
    challenges: [],
    impact: "Eliminated manual data collection and enabled automated generation of daily analytical reports.",
    stack: ["Python", "Pandas", "SQLite", "SQL", "REST APIs"],
    github: "https://github.com/chiru5190/NSE-Stock-Data-Pipeline",
    live: "https://nsestockdatapipeline.streamlit.app/",
  },
  {
    title: "Sentiment Analysis Engine",
    subtitle: "ML-Based Text Classification",
    summary: "Developed a text classification system to analyze sentiment from large-scale text data.",
    image: "/projects/sentiment-analysis.png",
    overview: "Built an NLP pipeline using TF-IDF vectorization and evaluated multiple models including Naive Bayes, SVM, and Logistic Regression.",
    solution: "Handled class imbalance using SMOTE and improved model performance through preprocessing and feature tuning.",
    features: [
      "Text preprocessing (tokenization, stopword removal, normalization)",
      "Model comparison and selection",
      "Improving performance on imbalanced data",
    ],
    challenges: [],
    impact: "Achieved 87% classification accuracy and enabled real-time prediction through a Streamlit interface.",
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit", "NLTK"],
    github: "https://github.com/chiru5190/sentiment-analysis-app",
    live: "https://sentimentanalysis-model.streamlit.app/",
  },
  {
    title: "Email Classifier",
    subtitle: "Neural Network Email Categorization",
    summary: "Built a neural network-based email classification system to categorize emails automatically.",
    image: "/projects/email-classifier.png",
    overview: "Designed a TensorFlow model integrated with a Flask API for real-time predictions, and a frontend interface for interaction.",
    solution: "Handled variable-length input using dynamic padding and optimized inference performance using TensorFlow Lite.",
    features: [
      "Neural network-based text classification",
      "API-based model deployment",
      "Performance optimization for faster inference",
    ],
    challenges: [],
    impact: "Reduced manual email sorting effort and achieved high accuracy with fast response times.",
    stack: ["TensorFlow", "Flask", "JavaScript", "Chart.js"],
    github: "https://github.com/chiru5190/Email-Classifier",
    live: null,
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="py-24 md:py-32 bg-surface relative overflow-hidden transition-colors">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.8 }}
        className="watermark top-12 left-6 md:left-12"
      >
        PROJECTS
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
          <h2 className="section-title mb-3">What I Have Built</h2>
          <p className="section-subtitle max-w-xl">End-to-end ML systems — built to solve real problems, measured by real results.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.3 } }}
              onClick={() => setSelected(p)}
              className="card flex flex-col h-full group cursor-pointer overflow-hidden border-accent/10"
            >
              {/* Preview Image */}
              <div className="h-48 bg-surface-alt border-b border-border relative overflow-hidden flex items-center justify-center">
                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center bg-surface-alt text-muted">
                  <ImageIcon size={32} className="opacity-30 mb-2" />
                  <span className="text-[10px] uppercase font-semibold tracking-wider">Preview</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider translate-y-2 group-hover:translate-y-0 transition-transform duration-300">Click for details</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-heading mb-1 group-hover:text-accent transition-colors font-space">{p.title}</h3>
                  <p className="text-sm text-accent font-medium mb-3">{p.subtitle}</p>

                  <p className="text-sm text-heading font-medium leading-relaxed mb-4">{p.summary}</p>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="flex items-start gap-2 bg-emerald-500/5 border border-emerald-500/10 p-3 rounded-lg mb-5"
                  >
                    <TrendingUp size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-emerald-400/90 leading-relaxed">{p.impact}</p>
                  </motion.div>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.stack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 text-[11px] font-semibold tracking-wide text-muted bg-surface-alt border border-border rounded-md hover:border-accent/40 hover:text-heading transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3 pt-4 border-t border-border" onClick={e => e.stopPropagation()}>
                  <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline flex items-center justify-center gap-1.5 flex-1 !text-sm !py-2 hover:bg-surface-alt hover:-translate-y-1 hover:shadow-lg transition-all">
                    <Github size={14} /> Code
                  </a>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary flex items-center justify-center gap-1.5 flex-1 !text-sm !py-2 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20 transition-all">
                      <ExternalLink size={14} /> Live
                    </a>
                  ) : (
                    <span className="text-sm text-muted/50 border border-border rounded-lg px-4 py-2 flex-1 text-center">
                      Demo Soon
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* What I'm Currently Working On - Standalone Section */}
        <motion.div
           variants={fadeUp}
           initial="hidden"
           whileInView="visible"
           viewport={viewportConfig}
           className="mt-28 md:mt-36"
        >
          <div className="relative rounded-3xl overflow-hidden glass border border-accent/20 p-8 md:p-14">
            {/* Background effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-space text-heading mb-4 leading-tight">What I'm Currently Working On</h3>
                <p className="text-body leading-relaxed mb-6 lg:mb-0">
                  Continuous development is key. Here is where I'm actively focusing my engineering efforts right now.
                </p>
              </div>
              
              <ul className="space-y-4 md:space-y-5">
                {[
                  "Building LLM-based applications for automation and problem-solving",
                  "Improving performance and structure of ML pipelines through better preprocessing and evaluation",
                  "Learning deployment patterns for scalable ML systems"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={viewportConfig}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="p-2 rounded-xl bg-surface border border-border text-accent group-hover:border-accent/40 group-hover:bg-accent/10 transition-all shrink-0 mt-0.5 shadow-sm">
                      <TrendingUp size={18} />
                    </div>
                    <p className="text-heading text-base md:text-[17px] font-medium leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={defaultTransition}
              className="space-y-6"
            >
              {/* Header image */}
              <div className="h-48 md:h-56 rounded-xl overflow-hidden relative bg-surface-alt border border-border flex items-center justify-center">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center text-muted">
                  <ImageIcon size={40} className="opacity-20 mb-3" />
                  <span className="text-xs uppercase font-semibold tracking-wider">Image Placeholder</span>
                </div>
              </div>

              {/* Title */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <h2 className="text-2xl md:text-3xl font-bold text-heading font-space pr-8">{selected.title}</h2>
                <p className="text-accent text-sm font-semibold mt-1">{selected.subtitle}</p>
                <p className="text-heading text-sm font-medium mt-2">{selected.summary}</p>
              </motion.div>

              {/* Overview & Solution */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="grid md:grid-cols-2 gap-5">
                <div>
                  <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2 font-space">Problem</h4>
                  <p className="text-body text-sm leading-relaxed">{selected.overview}</p>
                </div>
                <div>
                  <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-2 font-space">Solution</h4>
                  <p className="text-body text-sm leading-relaxed">{selected.solution}</p>
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-3 font-space">Key Features</h4>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {selected.features.map((f, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-start gap-2.5"
                    >
                      <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-body">{f}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Challenges & Fixes */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-3 font-space">Challenges & How I Solved Them</h4>
                <div className="space-y-3">
                  {selected.challenges.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="bg-surface-alt border border-border rounded-lg p-4 hover:border-accent/20 transition-colors"
                    >
                      <div className="flex items-start gap-2 mb-2">
                        <AlertTriangle size={14} className="text-amber-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-heading font-medium">{c.problem}</p>
                      </div>
                      <div className="flex items-start gap-2 ml-5">
                        <CheckCircle2 size={14} className="text-emerald-400 shrink-0 mt-0.5" />
                        <p className="text-sm text-body">{c.fix}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Impact */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex items-start gap-3 bg-emerald-500/5 border border-emerald-500/10 p-4 rounded-xl">
                <TrendingUp size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-1 font-space">Results</h4>
                  <p className="text-sm text-emerald-300/80 leading-relaxed font-medium">{selected.impact}</p>
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <h4 className="text-[11px] font-bold text-muted uppercase tracking-wider mb-3 font-space">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.stack.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + i * 0.05 }}
                      className="px-3 py-1.5 text-xs font-semibold text-heading bg-surface-alt border border-border rounded-lg"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Links */}
              <div className="pt-5 border-t border-border flex items-center gap-3">
                <a href={selected.github} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm hover:-translate-y-1 transition-transform">
                  <Github size={16} /> View Source Code
                </a>
                {selected.live && (
                  <a href={selected.live} target="_blank" rel="noreferrer" className="btn-outline inline-flex items-center gap-2 text-sm hover:-translate-y-1 transition-transform">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  )
}
