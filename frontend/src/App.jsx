import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Header from './components/Header'
import Search from './pages/Search'
import Results from './pages/Results'
import Cocktail from './pages/Cocktail'
import Favourites from './pages/Favourites'
import CocktailList from './pages/CocktailList'
import Error from './pages/Error'
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
            <Route path='/cocktail' element={<Cocktail />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/cocktailList' element={<CocktailList />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App