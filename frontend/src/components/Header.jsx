import { Link } from 'react-router-dom'


const Header = () => {

  return (
    <header className='header'>
      <nav class="navbar">
        <div class="container-fluid">
          <div class="navbar-header">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/results">Results</Link>
              </li>
            </ul>
          </div>
            <Link class="navbar-brand" to='/' >My Cocktail</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header