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
        <h1>1.2.3...Let's Party</h1>
        <p>It's that easy to find your perfect cocktail.</p>
        <FaCocktail /> 
        <FaWineBottle />
        <SearchBox searchChange={onSearchChange}/>
        <button type='submit' className='btn btn-block' onClick ={()=>{onClickHandler(searchField)}}>Search</button>
        
      </section>

      
    </>
  )
}

export default Search