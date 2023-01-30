import React from 'react'
import Cocktail from './Cocktail'

// Results from the search

function Results() {



  return (
    <>
      <section className='content'>
        <h1>Hmmmm delicious... *insert cocktail name*</h1>
        <p>This is what we found.</p>
        <button type='submit' className='btn btn-warning' onClick ={()=>{onClickHandler(searchField)}}>Search again</button>
      </section>
    </>
  )
}

export default Results