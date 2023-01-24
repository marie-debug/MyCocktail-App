import React from 'react'
import { FaWineBottle, FaCocktail } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Search() {
  return (
    <>
    <div className="App">
      <div>
        <section className='heading'>
          <h1>1.2.3...Let's Party</h1>
          <p>It's that easy to find your perfect cocktail.</p>
          <FaCocktail /> 
          <FaWineBottle />
        </section>
      </div>
      <div>
        <form>
          <input 
            type='search'
            className='form-group'
            placeholder='Search for your favourite cocktail or alcohol..'
          />
          <div className='form-group'>
            <button type='submit' className='btn'>Search</button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Search