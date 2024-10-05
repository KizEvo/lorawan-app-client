import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Status from './pages/Status'
import AboutUs from './pages/AboutUs'

import { initDatabase } from './db/Database'
import { Tab } from 'react-bootstrap'

function App() {
  const [isDatabaseInitialized, setIsDatabaseInitialized] = useState(false)

  useEffect(() => {
    const initializeDatabase = async () => {
      await initDatabase()
      setIsDatabaseInitialized(true)
    }

    initializeDatabase()
  }, [])

  if (!isDatabaseInitialized) {
    return <div>Loading...</div>
  }
  return (
    <Router>
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/status" element={<Status/>} />
            <Route path="/aboutus" element={<AboutUs/>} />
          </Routes>
      </div>  
    </Router>
  )
}

export default App
