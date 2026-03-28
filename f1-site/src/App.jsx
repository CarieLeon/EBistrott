import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import StatsSection from './sections/StatsSection'
import TeamsSection from './sections/TeamsSection'
import CalendarSection from './sections/CalendarSection'
import HistorySection from './sections/HistorySection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <TeamsSection />
      <CalendarSection />
      <HistorySection />
      <Footer />
    </div>
  )
}

export default App
