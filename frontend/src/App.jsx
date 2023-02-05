import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 
import Header from './components/Header'
import Search from './pages/Search'
import Cocktail from './pages/Cocktail'
import Favourites from './pages/Favourites'
import CocktailList from './pages/CocktailList'
import Error from './pages/Error'
import ErrorBoundary from './components/ErrorBoundary'
import Footer from './components/Footer'
import Container from "react-bootstrap/Container"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    <ErrorBoundary>
      <Router>
        <Container className ="min-vh-96 text-center">
          <Header />
          <Routes>
            <Route path='/' element={<Search />} />
            <Route path='/cocktail' element={<Cocktail />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/cocktailList' element={<CocktailList />} />
            <Route path='/error' element={<Error />} />
          </Routes>
          <ToastContainer autoClose={5000} closeOnClick={true} pauseOnHover={false}/>
        </Container>
        
        <Footer/>
      </Router>
      </ErrorBoundary>
  )
}

export default App