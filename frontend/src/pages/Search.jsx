

import { FaWineBottle, FaCocktail, FaSearch } from 'react-icons/fa'

function Search() {


  return (
    <>
      <section className='heading'>
        <h1>1.2.3...Let's Party</h1>
        <p>It's that easy to find your perfect cocktail.</p>
        <FaCocktail /> 
        <FaWineBottle />
      </section>

      <section className='content'>
          <form>
            <div className='form-group'>
              <input 
                type='search'
                className='form-group'
                placeholder='Search for your favourite cocktail or alcohol..'
              />
              <div className='form-group'>
                <button type='submit' className='btn btn-block'>Search</button>
              </div>
            </div>
          </form>
      </section>
    </>
  )
}

export default Search