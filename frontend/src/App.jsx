import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Header from './components/Header'
import Search from './pages/Search'
import Cocktail from './pages/Cocktail'
import Favourites from './pages/Favourites'
import CocktailList from './pages/CocktailList'
import Error from './pages/Error'
import Footer from './components/Footer'
import ErrorBoundary from './components/ErrorBoundary'


function App() {
  

  return (
    <ErrorBoundary>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/cocktail' element={<Cocktail />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/cocktailList' element={<CocktailList />} />
            <Route path='/error' element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      </ErrorBoundary>
  )
}

export default App