import React, {useState,useEffect} from 'react';
import { FaWineBottle, FaCocktail, FaSearch } from 'react-icons/fa'
import SearchBox from '../components/SearchBox'
import CocktailList from './CocktailList'
import { Link } from "react-router-dom" 
import { useNavigate } from "react-router-dom"

function Search() {

  const [searchField,setSearchField]= useState('')
  
  
  const onSearchChange = (event) => {
    setSearchField(event.target.value)
    console.log(event.target.value)
     
     
 }



const navigate = useNavigate()

const onClickHandler = (searchText) => navigate(`/cocktailList?searchtext=${searchText}`)
console.log()
console.log(searchField)

 return (
  <>
    <section className='heading'>
      <h1>It's cocktail hour!</h1>
      <p>It's that easy to search your perfect cocktail.</p>

      <SearchBox searchChange={onSearchChange}/>
      <div class="row justify-content-center">
        <button type='submit' className='btn btn-warning' onClick ={()=>{onClickHandler(searchField)}}>Search</button>
        
      </div>
    </section>

    
  </>
)
}

export default Search