import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './StatsSection.css'

const stats = [
  { value: '350+', unit: 'km/h', label: 'Vitesse maximale', icon: '⚡' },
  { value: '1000+', unit: 'ch', label: 'Puissance moteur', icon: '🔧' },
  { value: '5', unit: 'G', label: 'Force G en virage', icon: '💨' },
  { value: '1.6', unit: 's', label: 'Arrêt au stand', icon: '⏱' },
  { value: '24', unit: '', label: 'Grands Prix par saison', icon: '🏁' },
  { value: '10', unit: '', label: 'Écuries en compétition', icon: '🏎' },
]

function AnimatedNumber({ value, inView }) {
  return (
    <motion.span
      className="stat-value"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
    >
      {value}
    </motion.span>
  )
}

function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="stats" className="stats-section" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">LES CHIFFRES</span>
          <h2 className="section-title">La F1 en Chiffres</h2>
          <p className="section-subtitle">
            Des performances qui repoussent les limites de la physique
          </p>
        </motion.div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <span className="stat-icon">{stat.icon}</span>
              <div className="stat-number">
                <AnimatedNumber value={stat.value} inView={inView} />
                <span className="stat-unit">{stat.unit}</span>
              </div>
              <span className="stat-label">{stat.label}</span>
              <div className="stat-glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
