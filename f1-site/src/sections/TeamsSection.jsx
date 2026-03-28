import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './TeamsSection.css'

const teams = [
  { name: 'Red Bull Racing', color: '#1E41FF', drivers: ['M. Verstappen', 'L. Lawson'], titles: 6 },
  { name: 'Ferrari', color: '#DC0000', drivers: ['C. Leclerc', 'L. Hamilton'], titles: 16 },
  { name: 'McLaren', color: '#FF8700', drivers: ['L. Norris', 'O. Piastri'], titles: 8 },
  { name: 'Mercedes', color: '#00D2BE', drivers: ['G. Russell', 'A. Antonelli'], titles: 8 },
  { name: 'Aston Martin', color: '#006F62', drivers: ['F. Alonso', 'L. Stroll'], titles: 0 },
  { name: 'Alpine', color: '#0090FF', drivers: ['P. Gasly', 'J. Doohan'], titles: 2 },
  { name: 'Williams', color: '#005AFF', drivers: ['A. Albon', 'C. Sainz'], titles: 9 },
  { name: 'Haas', color: '#B6BABD', drivers: ['E. Ocon', 'O. Bearman'], titles: 0 },
  { name: 'RB', color: '#2B4562', drivers: ['Y. Tsunoda', 'I. Hadjar'], titles: 0 },
  { name: 'Sauber', color: '#52E252', drivers: ['N. Hulkenberg', 'G. Bortoleto'], titles: 0 },
]

function TeamsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="teams" className="teams-section" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">LES ÉCURIES</span>
          <h2 className="section-title">10 Écuries, 20 Pilotes</h2>
          <p className="section-subtitle">
            Les meilleures équipes du monde s'affrontent chaque week-end
          </p>
        </motion.div>

        <div className="teams-grid">
          {teams.map((team, index) => (
            <motion.div
              key={team.name}
              className="team-card"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              style={{ '--team-color': team.color }}
            >
              <div className="team-color-bar" style={{ background: team.color }} />
              <div className="team-info">
                <h3 className="team-name">{team.name}</h3>
                <div className="team-drivers">
                  {team.drivers.map((driver) => (
                    <span key={driver} className="driver-name">{driver}</span>
                  ))}
                </div>
              </div>
              <div className="team-titles">
                <span className="titles-count">{team.titles}</span>
                <span className="titles-label">titres</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamsSection
