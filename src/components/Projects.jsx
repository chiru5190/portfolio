import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, ExternalLink, CheckCircle2, TrendingUp, AlertTriangle, Image as ImageIcon } from "lucide-react"
import Modal from "./ui/Modal"
import { fadeUp, fadeLeft, fadeRight, staggerContainer, staggerItem, viewportConfig, defaultTransition } from "../animations"

const projects = [
  {
    title: "Stock Market Data Pipeline",
    subtitle: "ETL Engineering & SQL Analytics",
    summary: "Automated ETL pipeline extracting daily stock data, transforming it via Pandas, and driving SQLite-based analytical reporting.",
    image: "/projects/stock-pipeline.png",
    overview: "Raw financial data from APIs requires reliable extraction, structured cleaning, and persistent storage before it can be used for downstream machine learning modeling or business intelligence.",
    solution: "Built a modular Python-driven ETL pipeline. It extracts daily JSON data from a REST API, cleans and enforces schemas via Pandas, and loads it into an SQLite database for automated SQL analytics (including window functions and complex aggregations).",
    features: [
      "REST API Integration extracting real-time JSON financial data",
      "Pandas transformation pipeline enforcing schemas and cleaning records",
      "SQLite database integration utilizing efficient pandas.to_sql bulk loads",
      "Automated SQL analytics module generating structured CSV reports",
    ],
    challenges: [
      {
        problem: "Nested JSON API responses required complex flattening and strict type enforcement",
        fix: "Designed a modular Pandas transform layer to map JSON paths directly to structured, strongly-typed dataframe columns"
      },
      {
        problem: "Calculating dynamic rolling metrics natively in local storage",
        fix: "Implemented complex SQL window functions (AVG() OVER, RANK() OVER) directly in SQLite for high-performance aggregations"
      }
    ],
    impact: "Eliminated manual data pulling, establishing a fully automated pipeline that generates 5 daily analytical reports (e.g., 7-day moving averages).",
    stack: ["Python", "Pandas", "SQLite", "SQL", "REST APIs"],
    github: "https://github.com/chiru5190/NSE-Stock-Data-Pipeline",
    live: "https://nsestockdatapipeline.streamlit.app/",
  },
  {
    title: "Sentiment Analysis Engine",
    subtitle: "ML-Based Text Classification",
    summary: "Classifies real-time sentiment from large-scale text data with 87% accuracy across three classes.",
    image: "/projects/sentiment-analysis.png",
    overview: "Manual sentiment analysis doesn't scale. Businesses processing thousands of customer reviews need automated, accurate classification to extract actionable insights fast.",
    solution: "End-to-end ML pipeline using TF-IDF vectorization and supervised learning with real-time prediction through a Streamlit interface. Compared Naive Bayes, SVM, and Logistic Regression to select the best-performing model.",
    features: [
      "Multi-step NLP preprocessing (tokenization, stopword removal, lemmatization)",
      "Real-time single & batch prediction via Streamlit dashboard",
      "Model comparison dashboard across 3 classifiers",
      "SMOTE oversampling for class imbalance correction",
    ],
    challenges: [
      {
        problem: "Class imbalance skewed predictions — 72% of training data was positive sentiment",
        fix: "Applied SMOTE oversampling + stratified cross-validation, improving minority class recall by 23%"
      },
      {
        problem: "Raw text noise (URLs, emojis, special characters) degraded accuracy by ~15%",
        fix: "Built regex-based cleaning pipeline with custom tokenizer, recovering 12% accuracy"
      }
    ],
    impact: "87% classification accuracy across 3 sentiment classes. Processes 1000+ text records in under 3 seconds.",
    stack: ["Python", "Scikit-learn", "Pandas", "Streamlit", "NLTK"],
    github: "https://github.com/chiru5190/sentiment-analysis-app",
    live: "https://sentimentanalysis-model.streamlit.app/",
  },
  {
    title: "Email Classifier",
    subtitle: "Neural Network Email Categorization",
    summary: "Reduces manual email sorting effort by 85% using TensorFlow-based real-time classification.",
    image: "/projects/email-classifier.png",
    overview: "Organizations waste hours manually sorting email traffic. Unstructured text, variable lengths, and diverse categories make rule-based approaches fragile and unmaintainable.",
    solution: "TensorFlow neural network served through a Flask REST API with a responsive web frontend. Dynamic padding handles variable email lengths, and TF Lite conversion ensures fast inference.",
    features: [
      "Flask REST API for real-time inference (<200ms response)",
      "Responsive web frontend with prediction confidence charts",
      "TF Lite model serving — 60% faster inference than base TensorFlow",
      "Automated retraining pipeline for new email categories",
    ],
    challenges: [
      {
        problem: "Base TensorFlow model took 800ms per prediction — too slow for real-time API",
        fix: "Applied model quantization + TF Lite conversion, cutting inference to 320ms (60% reduction)"
      },
      {
        problem: "Email text varied from 10 to 5000+ tokens, breaking fixed-input architecture",
        fix: "Implemented dynamic padding with configurable max sequence length and attention masking"
      }
    ],
    impact: "85% reduction in manual sorting effort. Sub-second inference with 91% categorization accuracy.",
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
