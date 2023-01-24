import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Search from './pages/Search'

function App() {
  return (
    <>
      <Router>
      <div>
        <Routes>
          <Route path='/' element={<Search />} />
        </Routes>
      </div>
      </Router>
    </>
  )
}

export default App