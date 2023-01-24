import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import Search from './pages/Search'
import Header from './components/Header'

const App = () => {

  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Search />} />
          </Routes>
        </div>
      </Router>
    </>
    
  )
}

export default App
