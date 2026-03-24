import { useState } from "react"
import { motion } from "framer-motion"
import { Github, ExternalLink, CheckCircle2, TrendingUp } from "lucide-react"
import Modal from "./ui/Modal"

const projects = [
  {
    title: "Sentiment Analysis",
    subtitle: "ML-Based Text Classification",
    problem: "Manual sentiment analysis is inefficient and doesn't scale for large volumes of text data.",
    solution: "Built an ML model using TF-IDF and supervised learning to classify sentiments automatically with real-time prediction.",
    impact: "Automated analysis of thousands of text records instantly, reducing manual effort significantly.",
    features: [
      "NLP preprocessing (tokenization, stopword removal)",
      "Real-time prediction using Streamlit",
      "Batch text processing",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    github: "https://github.com/chiru5190", live: null
  },
  {
    title: "Email Classifier",
    subtitle: "ML-based Email Categorization",
    problem: "Manual email categorization is time-consuming and error-prone for large inboxes.",
    solution: "Built a neural network model using TensorFlow to classify emails into categories with a Flask backend for real-time inference.",
    impact: "Enabled real-time, high-accuracy categorization, improving overall usability and inbox management.",
    features: [
      "Flask backend for real-time inference",
      "Interactive frontend with HTML/CSS/JS",
      "Visualization of prediction confidence",
    ],
    stack: ["Python", "TensorFlow", "Flask", "JavaScript", "Bootstrap", "Chart.js"],
    github: "https://github.com/chiru5190", live: null
  }
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <h2 className="section-title mb-3">More Projects</h2>
          <p className="section-subtitle max-w-xl">Other selected work in machine learning and full-stack development.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              onClick={() => setSelected(p)}
              className="card p-6 flex flex-col h-full group cursor-pointer hover:border-accent/30 transition-colors">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-heading mb-0.5 group-hover:text-accent transition-colors">{p.title}</h3>
                <p className="text-xs text-accent mb-4">{p.subtitle}</p>
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Problem</h4>
                  <p className="text-sm text-body leading-relaxed">{p.problem}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-1.5">Solution</h4>
                  <p className="text-sm text-body leading-relaxed">{p.solution}</p>
                </div>
                <div className="mb-5 flex items-start gap-2 bg-emerald-50/50 p-3 rounded-lg border border-emerald-100">
                  <TrendingUp size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-0.5">Impact</h4>
                    <p className="text-sm text-emerald-800/80 leading-snug">{p.impact}</p>
                  </div>
                </div>
                <p className="text-xs text-muted">{p.stack.join(" ┬À ")}</p>
              </div>
              <div className="flex items-center gap-2 pt-4 mt-5 border-t border-border" onClick={e => e.stopPropagation()}>
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-outline flex items-center gap-1.5 !text-xs !px-3 !py-1.5"><Github size={13} /> GitHub</a>
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noreferrer" className="btn-primary flex items-center gap-1.5 !text-xs !px-3 !py-1.5"><ExternalLink size={13} /> Live Demo</a>
                ) : (
                  <span className="text-xs text-muted border border-border rounded-md px-3 py-1.5">Demo Soon</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div>
            <h2 className="text-xl font-bold text-heading mb-0.5 pr-8">{selected.title}</h2>
            <p className="text-accent text-sm mb-5">{selected.subtitle}</p>
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Problem</h4>
                <p className="text-body text-sm leading-relaxed">{selected.problem}</p>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Solution</h4>
                <p className="text-body text-sm leading-relaxed">{selected.solution}</p>
              </div>
              <div className="flex items-start gap-2 bg-emerald-50 p-3 rounded-lg border border-emerald-100">
                <TrendingUp size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-0.5">Impact</h4>
                  <p className="text-sm text-emerald-800/80 leading-relaxed">{selected.impact}</p>
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Features</h4>
                {selected.features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 mb-1.5">
                    <CheckCircle2 size={14} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-sm text-body">{f}</span>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Stack</h4>
                <p className="text-sm text-body">{selected.stack.join(" ┬À ")}</p>
              </div>
              <div className="pt-3 border-t border-border">
                <a href={selected.github} target="_blank" rel="noreferrer" className="btn-primary inline-flex items-center gap-2 text-sm"><Github size={16} /> Source Code</a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
