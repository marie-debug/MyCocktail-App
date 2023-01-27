// List of cocktails available to display from the API
import React, { useEffect, useState } from "react";
import {useSearchParams } from 'react-router-dom';

const  CocktailList= ()=> {

  const [cocktails, setCocktails] = useState([])
  let [searchParams, setSearchParams] = useSearchParams();
  let searchText = searchParams.get("searchtext")
  
  const fetchData = () => {
 
    fetch(`http://localhost:3000/cocktails/${searchText}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
       {setCocktails(data)}
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

 

 

  return (
    <div>
      <h1> Here is a variation of cocktails</h1>

      {cocktails.map((cocktail) => {
          return (
            <>
        <h2> {cocktail.name}</h2>
        <p>Instructions: {cocktail.instructions}</p>
        <p>Ingredients: {cocktail.ingredients}</p>
        </>
      )
          }
     
      )}
  </div>
  )
}

export default CocktailList