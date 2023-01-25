import React, {useState,useEffect} from 'react';
import { FaWineBottle, FaCocktail, FaSearch } from 'react-icons/fa'
import SearchBox from '../components/SearchBox'

function Search() {

  const [searchfield,setSearchfield]= useState('')



  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
    console.log(event.target.value)
     
     
 }


  return (
    <>
      <section className='heading'>
        <h1>1.2.3...Let's Party</h1>
        <p>It's that easy to find your perfect cocktail.</p>
        <FaCocktail /> 
        <FaWineBottle />
        <SearchBox searchChange={onSearchChange}/>
        <button type='submit' className='btn btn-block'>Search</button>
      </section>

      
    </>
  )
}

export default Search