// List of cocktails available to display from the API
import React, { useEffect, useState } from "react";
import {useSearchParams } from 'react-router-dom';
import Cocktail from './Cocktail'
import SearchAgain from '../components/SearchAgain'

const  CocktailList= ()=> {
   
  const [cocktails, setCocktails] = useState([])
  let [searchParams, setSearchParams] = useSearchParams();
  let searchText = searchParams.get("searchtext")
  
  const fetchData = () => {
    
    try{
    fetch(`${import.meta.env.VITE_BACKEND_API}/cocktails/${searchText}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
       {setCocktails(data)}
      })
    }catch(error){
      console.log('Error: ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
   <section className='content'>
        <h1>Keep Calm and drink a cocktail</h1>
        <p>Browse through our list of cocktails</p>
      </section>

      {cocktails.map((cocktail) => {
          return (
            
            <Cocktail cocktail={cocktail}/>          
      )
          }
     
      )}     

      <SearchAgain />

  </>
  )
}

export default CocktailList