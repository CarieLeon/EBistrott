import React from 'react'
import { motion } from 'framer-motion'
import F1Scene from '../components/F1Scene'
import './HeroSection.css'

function HeroSection() {
  return (
    <section id="hero" className="hero-section">
      <F1Scene />
      <div className="hero-overlay" />
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          SAISON 2025
        </motion.div>
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          LE MONDE DE LA
          <br />
          <span className="hero-highlight">FORMULE 1</span>
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Vitesse. Technologie. Passion.
          <br />
          Plongez dans l'univers du sport automobile le plus rapide au monde.
        </motion.p>
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <a href="#stats" className="btn btn-primary">
            Découvrir
            <span className="btn-arrow">&rarr;</span>
          </a>
          <a href="#calendar" className="btn btn-outline">
            Calendrier 2025
          </a>
        </motion.div>
        <motion.div
          className="hero-speed-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <div className="speed-line" />
          <span>350+ KM/H</span>
          <div className="speed-line" />
        </motion.div>
      </div>
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="scroll-arrow" />
      </motion.div>
    </section>
  )
}

export default HeroSection
