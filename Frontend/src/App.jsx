import './App.css'
import Navbar from './Components/Navbar'
import React from 'react'
import About from './Components/About'
import Menu from './Components/Menu'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
