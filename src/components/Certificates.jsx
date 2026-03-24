import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Award, Calendar, ExternalLink, Cloud, Code, Database, FileBadge, ShieldCheck } from "lucide-react"
import Modal from "./ui/Modal"
import { fadeUp, staggerContainer, staggerItem, viewportConfig, defaultTransition } from "../animations"

const mainCerts = [
  {
    title: "Machine Learning Specialization",
    issuer: "DeepLearning.AI / Stanford Online",
    issuerIcon: <Award size={14} />,
    date: "March 2026",
    highlight: true,
    image: "/certs/ml-specialization.png",
    verifyUrl: "https://learn.deeplearning.ai/certificates/eabe2269-c582-4381-bc4d-d542f5572571",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    issuerIcon: <Cloud size={14} />,
    date: "September 2025",
    highlight: true,
    image: "/certs/oracle-genai.png",
    verifyUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=7BF17C01C7354D23451E042654406C3FE520EDB29E19FC61151616228855AF51",
  },
]

const otherCerts = [
  {
    title: "JavaScript Essentials",
    issuer: "NxtWave",
    issuerIcon: <Code size={14} />,
    date: "September 2024",
    image: "/certs/javascript.png",
    verifyUrl: "https://certificates.ccbp.in/academy/javascript-essentials?id=NNYXBLSTRM",
  },
  {
    title: "Programming Foundations with Python",
    issuer: "NxtWave",
    issuerIcon: <Code size={14} />,
    date: "July 2024",
    image: "/certs/python.png",
    verifyUrl: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=BMLHFUJUXK",
  },
  {
    title: "Introduction to Databases (SQL)",
    issuer: "NxtWave",
    issuerIcon: <Database size={14} />,
    date: "May 2024",
    image: "/certs/sql.png",
    verifyUrl: "https://certificates.ccbp.in/academy/introduction-to-databases?id=EFPUZJFOOZ",
  },
  {
    title: "AWS Solution Architect Micro Degree",
    issuer: "Edyoda",
    issuerIcon: <Cloud size={14} />,
    date: "April 2024",
    image: "/certs/aws-edyoda.png",
    verifyUrl: "https://classroom.edyoda.com/public-certificate/chiranjeevig141149/AWSMD160324",
  },
]

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certificates" className="py-24 md:py-32 bg-bg relative overflow-hidden transition-colors">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.04, x: 0 }}
        viewport={viewportConfig}
        transition={{ duration: 0.8 }}
        className="watermark top-12 left-6 md:left-12"
      >
        CERTIFICATES
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
          <h2 className="section-title mb-3">Certifications</h2>
          <p className="section-subtitle max-w-xl">Professional credentials validating technical capabilities across cloud, AI, and development.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {mainCerts.map((c) => (
            <motion.div
              key={c.title}
              variants={staggerItem}
              whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
              onClick={() => setSelected(c)}
              className={`card flex flex-col h-full group overflow-hidden cursor-pointer ${c.highlight ? "border-accent/20" : ""
                }`}
            >
              {/* Thumbnail */}
              <div className="h-36 bg-surface-alt border-b border-border relative overflow-hidden flex items-center justify-center">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden absolute inset-0 flex-col items-center justify-center bg-surface-alt text-muted">
                  <FileBadge size={28} className="opacity-30 mb-2" />
                  <span className="text-[10px] uppercase font-semibold tracking-wider">Preview</span>
                </div>

                {c.highlight && (
                  <motion.div
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute top-2.5 right-2.5 bg-accent/90 text-white text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full shadow-[0_0_12px_-2px_rgba(6,182,212,0.5)]"
                  >
                    Top
                  </motion.div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex-1 mb-4">
                  <h3 className="text-sm font-bold text-heading leading-tight mb-2 group-hover:text-accent transition-colors">{c.title}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-muted font-medium">
                    <span className="text-accent/70">{c.issuerIcon}</span>
                    <span>{c.issuer}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <span className="text-xs text-muted flex items-center gap-1.5">
                    <Calendar size={11} className="opacity-70" /> {c.date}
                  </span>
                  <span className="text-xs font-semibold text-accent flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    View <ExternalLink size={11} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* View All Card */}
          <motion.div
            variants={staggerItem}
            whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.3 } }}
            onClick={() => setSelected('all')}
            className="card flex flex-col h-full group overflow-hidden cursor-pointer justify-center items-center border-dashed border-2 border-border hover:border-accent/40 bg-surface/30 min-h-[220px]"
          >
            <FileBadge size={36} className="text-muted mb-4 group-hover:text-accent transition-colors opacity-50 group-hover:opacity-100" />
            <h3 className="text-lg font-bold text-heading group-hover:text-accent transition-colors text-center px-4">Additional Certifications</h3>
            <p className="text-xs font-medium text-muted mt-2 tracking-wide text-center px-4 leading-relaxed">(Foundational courses and coursework)</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Certificate Preview Modal */}
      <AnimatePresence>
        {selected && (
          <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
            {selected === 'all' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={defaultTransition}
                className="space-y-6"
              >
                <div className="border-b border-border pb-4 mb-2">
                  <h2 className="text-xl md:text-2xl font-bold text-heading font-space">Other Certifications</h2>
                  <p className="text-muted text-sm mt-1">Foundational credentials and course completions.</p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {otherCerts.map(c => (
                    <div key={c.title} className="bg-surface-alt border border-border rounded-xl p-4 flex flex-col items-center text-center group">
                      <div className="w-full h-32 bg-surface rounded-lg mb-4 overflow-hidden border border-border">
                        <img 
                          src={c.image} 
                          alt={c.title} 
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-105" 
                           onError={(e) => {
                             e.currentTarget.style.display = 'none'
                           }}
                        />
                      </div>
                      <h4 className="text-sm font-bold text-heading mb-1.5 leading-tight">{c.title}</h4>
                      <div className="flex items-center gap-1.5 text-[11px] text-muted font-medium mb-4">
                        <span className="text-accent/70">{c.issuerIcon}</span>
                        <span>{c.issuer}</span>
                      </div>
                      <a href={c.verifyUrl} target="_blank" rel="noreferrer" className="btn-outline text-xs px-4 py-1.5 mt-auto flex items-center gap-1.5 w-full justify-center group-hover:bg-surface transition-colors">
                        <ShieldCheck size={12} /> Verify Credential
                      </a>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={defaultTransition}
              className="space-y-5"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-heading font-space pr-8 leading-tight">{selected.title}</h2>
                <div className="flex items-center gap-2 text-accent text-sm font-semibold mt-2">
                  {selected.issuerIcon}
                  <span>{selected.issuer}</span>
                  <span className="text-muted/30">•</span>
                  <span className="text-muted">{selected.date}</span>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface-alt overflow-hidden min-h-[250px] flex items-center justify-center">
                <div className="relative w-full min-h-[250px] flex items-center justify-center group overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={selected.image}
                    alt={`${selected.title} Certificate`}
                    className="max-w-full max-h-[50vh] object-contain p-2"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.nextSibling.style.display = 'flex'
                    }}
                  />
                  <div className="hidden absolute inset-0 flex-col items-center justify-center text-center p-8 text-muted">
                    <Award size={48} className="mb-4 opacity-15" />
                    <p className="text-sm font-medium">{selected.title}</p>
                    <p className="text-xs text-muted mt-2">Place certificate image in /public{selected.image}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected(null)}
                  className="btn-primary text-sm py-2 px-6 flex items-center gap-2 shadow-lg shadow-accent/20"
                >
                  <Award size={14} /> View Certificate
                </motion.button>
                {selected.verifyUrl && (
                  <motion.a
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    href={selected.verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline text-sm py-2 px-6 flex items-center gap-2"
                  >
                    <ShieldCheck size={14} /> Verify
                  </motion.a>
                )}
              </div>
            </motion.div>
            )}
          </Modal>
        )}
      </AnimatePresence>
    </section>
  )
}
