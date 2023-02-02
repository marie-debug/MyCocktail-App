import React, {useState,useEffect} from 'react';
import SearchBox from '../components/SearchBox'

import { useNavigate } from "react-router-dom"

function Search() {

  const [searchField,setSearchField]= useState('')
  
  
  const onSearchChange = (event) => {
    setSearchField(event.target.value)
    console.log(event.target.value)
     
     
 }



const navigate = useNavigate()

const onClickHandler = (searchText) => navigate(`/cocktailList?searchtext=${searchText}`)


 return (
  <>
    <div className='container'>
      <section className='heading'>
        <h1>It's cocktail hour!</h1>
        <p>It's that easy to search your perfect cocktail.</p>

        <SearchBox searchChange={onSearchChange}/>
        <div class="row justify-content-center">
          <button type='submit' className='btn btn-warning' onClick ={()=>{onClickHandler(searchField)}}>Search</button>
          
        </div>
      </section>
    </div>

    
  </>
)
}

export default Search