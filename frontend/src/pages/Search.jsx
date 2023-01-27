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
      <h1>It's cocktail hour!</h1>
      <p>It's that easy to search your perfect cocktail.</p>

      <SearchBox searchChange={onSearchChange}/>
      <div class="row justify-content-center">
        <button type='submit' className='btn btn-warning'>Search</button>
      </div>
    </section>

    
  </>
)
}

export default Search