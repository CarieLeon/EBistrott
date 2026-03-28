import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Navbar.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#hero', label: 'Accueil' },
    { href: '#stats', label: 'Stats' },
    { href: '#teams', label: 'Écuries' },
    { href: '#calendar', label: 'Calendrier' },
    { href: '#history', label: 'Histoire' },
  ]

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="nav-content">
        <a href="#hero" className="nav-logo">
          <span className="logo-f1">F1</span>
          <span className="logo-dot">.</span>
          <span className="logo-text">World</span>
        </a>
        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
