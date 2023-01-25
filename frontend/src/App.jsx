import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Header from './components/Header'
import Search from './pages/Search'
import Results from './pages/Results'
import Footer from './components/Footer'


function App() {
  

  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/results' element={<Results />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App