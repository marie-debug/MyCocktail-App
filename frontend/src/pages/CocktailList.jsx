// List of cocktails available to display from the API
import React, { useEffect, useState } from "react"
import {useSearchParams } from 'react-router-dom'
import Cocktail from './Cocktail'
import SearchAgain from '../components/SearchAgain'


const  CocktailList= ()=> {
   
  const [cocktails, setCocktails] = useState([])
  let [searchParams, setSearchParams] = useSearchParams();
  let searchText = searchParams.get("searchtext")
  
  const fetchData = () => {
    
    try{
    fetch(`http://localhost:3000/cocktails/${searchText}`)
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
   <section className='content text-center'>
        <h1>Keep Calm and drink a cocktail</h1>
        <h2>Browse through our list of cocktails</h2>
      </section>

      {Array.isArray(cocktails) && cocktails.length ?
      
      cocktails.map((cocktail,i) => {
          return (
            <Cocktail key= {i} itemNumber ={i+1} cocktail={cocktail}/>
            )
          }
     
      )  : (
        <>
          <p>Ow it seems we can't find a cocktail for you please search again ..</p>
        </>
      )}    

      <SearchAgain/>
  </>
  )
}

export default CocktailList