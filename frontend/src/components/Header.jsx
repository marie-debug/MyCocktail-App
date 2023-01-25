import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <header className='header'>
      <nav class="navbar" aria-label="Light offcanvas navbar">
        <div class="container-fluid">
          <div class="navbar-header">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarLight" aria-controls="offcanvasNavbarLight">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbarLight" aria-labelledby="offcanvasNavbarLightLabel">
            <div class="offcanvas-header">
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/results">Results</Link>
                </li>
              </ul>
            </div>
          </div>
            <Link class="navbar-brand" to='/' >My Cocktail</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header