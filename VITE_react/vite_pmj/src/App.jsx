import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Axi from './pages/Ex14'

function App() {

  return (
    <>
      <Link to="/">Home</Link> | {' '}
      <Link to="/ex14">Ex14</Link> | {' '}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex14" element={<Axi />} />
      </Routes>

    </>
  )
}

export default App
