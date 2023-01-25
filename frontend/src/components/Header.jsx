import { Link } from 'react-router-dom'
import { FaHome, FaCocktail, FaGrinHearts } from 'react-icons/fa'


const Header = () => {

  return (
    <header className='header'>
      <nav className="navbar" aria-label="Light offcanvas navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">
              <span className="navbar-toggler-icon"></span>
            </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
            <div className="offcanvas-header">
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
                  <Link className="nav-link" to="/results">Results</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cocktail">Cocktail</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/error">Error</Link>
                </li>
              </ul>
            </div>
          </div>
            <Link className="navbar-brand" to='/' >My Cocktail</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header