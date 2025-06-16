import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Board from './pages/Board'
import Write from './pages/Write'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">Board</Link> | {' '}


      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/write" element={<Write />} />

      </Routes>
    </>
  )
}

export default App
