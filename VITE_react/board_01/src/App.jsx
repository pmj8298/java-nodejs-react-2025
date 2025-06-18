import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Board from './pages/Board'
import Write from './pages/Write'
import View from './pages/View'
import Update from './pages/Update'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Link to="/">Board</Link> | {' '}


      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/write" element={<Write />} />
        <Route path="/view" element={<View />} />
        <Route path="/update" element={<Update />} />

      </Routes>
    </>
  )
}

export default App
