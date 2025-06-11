import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Css from './pages/Ex07'

function App() {

  return (
    <>
      <Link to="/">Home</Link> | {' '}
      <Link to="/ex07">Ex07</Link> | {' '}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ex07" element={<Css />} />
      </Routes>

    </>
  )
}

export default App
