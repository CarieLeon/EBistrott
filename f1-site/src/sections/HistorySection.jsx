import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './HistorySection.css'

const timeline = [
  { year: '1950', title: 'Naissance de la F1', desc: 'Premier Grand Prix de Formule 1 à Silverstone. Giuseppe Farina devient le premier champion du monde.' },
  { year: '1958', title: 'Apparition des moteurs arrière', desc: 'Cooper révolutionne la F1 avec un moteur placé à l\'arrière, changeant à jamais la conception des monoplaces.' },
  { year: '1977', title: 'L\'effet de sol', desc: 'Lotus introduit l\'effet de sol avec la Lotus 78, générant un appui aérodynamique inédit.' },
  { year: '1988', title: 'La saison parfaite', desc: 'McLaren-Honda remporte 15 des 16 courses. Senna et Prost dominent outrageusement la saison.' },
  { year: '2004', title: 'La domination Schumacher', desc: 'Michael Schumacher remporte son 7e titre mondial avec Ferrari, un record qui tiendra 16 ans.' },
  { year: '2014', title: 'L\'ère hybride', desc: 'Nouvelle réglementation moteur : V6 turbo hybride. Mercedes domine le début de cette nouvelle ère.' },
  { year: '2021', title: 'Le duel légendaire', desc: 'Verstappen vs Hamilton : une saison épique qui se décide au dernier tour du dernier Grand Prix.' },
  { year: '2025', title: 'L\'avenir', desc: 'Nouvelles réglementations, nouveaux pilotes, nouvelles rivalités. La F1 continue d\'évoluer.' },
]

function HistorySection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="history" className="history-section" ref={ref}>
      <div className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">HISTOIRE</span>
          <h2 className="section-title">75 Ans de Légende</h2>
          <p className="section-subtitle">
            Les moments clés qui ont façonné la Formule 1
          </p>
        </motion.div>

        <div className="timeline">
          <div className="timeline-line" />
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HistorySection
