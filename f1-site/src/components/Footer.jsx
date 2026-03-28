import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              <span style={{ color: 'var(--f1-red)' }}>F1</span>
              <span style={{ color: 'var(--f1-gold)' }}>.</span>
              World
            </span>
            <p className="footer-tagline">
              Le meilleur de la Formule 1, en un seul endroit.
            </p>
          </div>
          <div className="footer-links">
            <a href="#hero">Accueil</a>
            <a href="#stats">Stats</a>
            <a href="#teams">Écuries</a>
            <a href="#calendar">Calendrier</a>
            <a href="#history">Histoire</a>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p>Site réalisé avec React + Three.js</p>
          <p className="footer-copy">2025 — Projet démonstration</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
