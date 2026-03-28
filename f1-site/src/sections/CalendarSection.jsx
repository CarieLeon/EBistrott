import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './CalendarSection.css'

const races = [
  { round: 1, name: 'GP d\'Australie', city: 'Melbourne', date: '16 Mars', flag: '🇦🇺' },
  { round: 2, name: 'GP de Chine', city: 'Shanghai', date: '23 Mars', flag: '🇨🇳' },
  { round: 3, name: 'GP du Japon', city: 'Suzuka', date: '6 Avril', flag: '🇯🇵' },
  { round: 4, name: 'GP de Bahreïn', city: 'Sakhir', date: '13 Avril', flag: '🇧🇭' },
  { round: 5, name: 'GP d\'Arabie Saoudite', city: 'Djeddah', date: '20 Avril', flag: '🇸🇦' },
  { round: 6, name: 'GP de Miami', city: 'Miami', date: '4 Mai', flag: '🇺🇸' },
  { round: 7, name: 'GP d\'Émilie-Romagne', city: 'Imola', date: '18 Mai', flag: '🇮🇹' },
  { round: 8, name: 'GP de Monaco', city: 'Monte-Carlo', date: '25 Mai', flag: '🇲🇨' },
  { round: 9, name: 'GP d\'Espagne', city: 'Barcelone', date: '1 Juin', flag: '🇪🇸' },
  { round: 10, name: 'GP du Canada', city: 'Montréal', date: '15 Juin', flag: '🇨🇦' },
  { round: 11, name: 'GP d\'Autriche', city: 'Spielberg', date: '29 Juin', flag: '🇦🇹' },
  { round: 12, name: 'GP de Grande-Bretagne', city: 'Silverstone', date: '6 Juillet', flag: '🇬🇧' },
]

function CalendarSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="calendar" className="calendar-section" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">CALENDRIER</span>
          <h2 className="section-title">Saison 2025</h2>
          <p className="section-subtitle">
            24 Grands Prix à travers le monde entier
          </p>
        </motion.div>

        <div className="calendar-grid">
          {races.map((race, index) => (
            <motion.div
              key={race.round}
              className="race-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -4 }}
            >
              <div className="race-round">R{String(race.round).padStart(2, '0')}</div>
              <div className="race-flag">{race.flag}</div>
              <div className="race-info">
                <h4 className="race-name">{race.name}</h4>
                <span className="race-city">{race.city}</span>
              </div>
              <div className="race-date">{race.date}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="calendar-more"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          + 12 autres courses jusqu'en décembre 2025
        </motion.p>
      </div>
    </section>
  )
}

export default CalendarSection
