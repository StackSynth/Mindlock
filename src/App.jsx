import { useState } from 'react'
import './App.css'
import LandingPage from './component/landingpage'
import Home from './component/home'
import About from './component/about'
import Contact from './component/contact'
import Feature from './component/feature'

function App() {
  const [currentPage, setCurrentPage] = useState('landing')

  const handleNavigation = (page) => {
    setCurrentPage(page)
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={handleNavigation} />
      case 'home':
        return <Home onNavigate={handleNavigation} />
      case 'about':
        return <About onNavigate={handleNavigation} />
      case 'contact':
        return <Contact onNavigate={handleNavigation} />
      case 'feature':
        return <Feature onNavigate={handleNavigation} />
      default:
        return <LandingPage onNavigate={handleNavigation} />
    }
  }

  return (
    <>
      {renderPage()}
    </>
  )
}

export default App