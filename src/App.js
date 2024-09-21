import logo from './logo.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/Navbar'
import Charts from './pages/Charts'

function App() {
  return (
    <section class='d-flex flex-column'>
      <Navbar />
      <div
        class='container-lg mx-0 px-0 align-self-center'
        style={{ height: '90vh' }}
      >
        <Charts />
      </div>
    </section>
  )
}

export default App
