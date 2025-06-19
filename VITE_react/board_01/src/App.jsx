// import { useState } from 'react'
// import { Link, Routes, Route } from 'react-router-dom'
// import './App.css'
// import Board from './pages/Board'
// import Write from './pages/Write'
// import View from './pages/View'
// import Update from './pages/Update'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <Link to="/">Board</Link> | {' '}


//       <Routes>
//         <Route path="/" element={<Board />} />
//         <Route path="/write" element={<Write />} />
//         <Route path="/view" element={<View />} />
//         <Route path="/update" element={<Update />} />

//       </Routes>
//     </>
//   )
// }

// export default App
import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Data from './pages/Data'
import Board from './pages/Board'
import Write from './pages/Write'
import View from './pages/View'
import Mypage from './pages/Mypage'
import Update from './pages/Update'
import CheckMyPage from './pages/CheckMypage'
import Header from './components/Header'
import Logout from './pages/Logout'

function App() {
  return (
    <>
      <Header />
      <nav>
        <Link to="/">최저가 물건 찾기</Link>
        <Link to="/Data">통계</Link>
        <Link to="/Board">게시판</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Data" element={<Data />} />
        <Route path="/Board" element={<Board />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/View" element={<View />} />
        <Route path="/Write" element={<Write />} />
        <Route path="/Mypage" element={<Mypage />} />
        <Route path="/CheckMypage" element={<CheckMyPage />} />
        <Route path="/Logout" element={<Logout />} />

      </Routes>

      <footer style={{ textAlign: 'center', padding: '1rem', color: '#888' }}>
        COPYRIGHTS @ 2025 Miniproject02 - Team01 , All rights reserved.
      </footer>
    </>
  );
}
export default App;
