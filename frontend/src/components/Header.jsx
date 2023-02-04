import { Link } from 'react-router-dom'
import { FaHome, FaCocktail } from 'react-icons/fa'


const Header = () => {

  return (
    <header className='header'>
      <nav className="navbar navbar-dark" aria-label="Dark offcanvas navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarDark" aria-controls="offcanvasNavbarDark">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasNavbarDark" aria-labelledby="offcanvasNavbarDarkLabel">
            <div className="offcanvas-header">
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/"><FaHome />Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/favourites"><FaCocktail />Favourites</Link>
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