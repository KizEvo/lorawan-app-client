import logo from './logo.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import Charts from './pages/Charts'
import { initDatabase } from './db/Database'

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
    <section className='d-flex flex-column'>
      <Navbar />
      <div
        className='container-lg mx-0 px-0 align-self-center'
        style={{ height: '90vh' }}
      >
        <Charts />
      </div>
    </section>
  )
}

export default App
