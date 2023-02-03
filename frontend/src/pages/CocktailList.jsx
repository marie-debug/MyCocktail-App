// List of cocktails available to display from the API
import React, { useEffect, useState } from "react"
import {useSearchParams } from 'react-router-dom'
import Cocktail from './Cocktail'
import SearchAgain from '../components/SearchAgain'
import Footer from '../components/Footer'

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

      {Array.isArray(cocktails) && cocktails.length ?
      
      cocktails.map((cocktail) => {
          return (
            <Cocktail cocktail={cocktail}/>
            )
          }
     
      )  : (
        <>
          <p>Ow it seems we can't find a cocktail for you please search again ..</p>
        </>
      )}    

      <SearchAgain/>
      <Footer />

  </>
  )
}

export default CocktailList