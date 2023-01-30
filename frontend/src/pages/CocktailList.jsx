// List of cocktails available to display from the API
import React, { useEffect, useState } from "react";
import {useSearchParams } from 'react-router-dom';
import BackToSearch from "../components/BackToSearch";
import Cocktail from './Cocktail'

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

       
  </>
  )
}

export default CocktailList