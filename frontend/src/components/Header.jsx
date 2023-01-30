import { Link } from 'react-router-dom'
import { FaHome, FaCocktail, FaGrinHearts } from 'react-icons/fa'


const Header = () => {

  return (
    <header className='header'>
      <nav class="navbar navbar-dark" aria-label="Dark offcanvas navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
            <div className="offcanvas-header">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/"><FaHome />Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/favourites"><FaGrinHearts />Favourites</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cocktail-list"><FaCocktail />Cocktail List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/error">Error</Link>
                </li>
              </ul>
            </div>
          </div>
            <Link className="navbar-brand" to='/'>My Cocktail</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header