import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skills from './components/Skills'
import { Link, Element } from 'react-scroll'
import ChatbotEmbed from './components/ChatbotEmbed'

const App = () => {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <header className="absolute top-0 left-0 w-full p-4 bg-gray-800 shadow-md">
          <nav>
            <ul className="flex justify-center space-x-8">
              <li><Link to="about" smooth={true} duration={500} className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">About</Link></li>
              <li><Link to="skills" smooth={true} duration={500} className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">Skills</Link></li>
              <li><Link to="projects" smooth={true} duration={500} className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">Projects</Link></li>
              <li><Link to="contact" smooth={true} duration={500} className="text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<>
            <Element name="home"><Home /></Element>
            <Element name="about"><About /></Element>
            <Element name="skills"><Skills /></Element>
            <Element name="projects"><Projects /></Element>
            <Element name="contact"><Contact /></Element>
          </>} />
        </Routes>
        <ChatbotEmbed />
      </div>
    </Router>
  )
}

export default App