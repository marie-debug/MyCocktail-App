import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Search from './pages/Search'
import Header from './components/Header'



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
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App