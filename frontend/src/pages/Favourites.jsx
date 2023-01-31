import React, { useEffect, useState } from "react";
import SearchAgain from '../components/SearchAgain'


function Favourites() {
  const [cocktailData, setCocktailData] = useState(null)
  const fetchData = () => {
 try{
    fetch(`${process.env.BACKEND_API}/my/cocktail`)
      .then(response => {
        return response.json()
      })
      .then(data => {
       { setCocktailData(data)}
      })
  }catch(error){
    console.log('Error: ', error)
  }}



  useEffect(() => {
    fetchData()
  }, [])


  return (
      <>
        <section className='content'>
          <h1>My favourites</h1>
          <p>Here's to alcohol, the rose colored glasses of life!</p>
        </section>

        <section className='content'>
        <ul>
        { Array.isArray(cocktailData) && cocktailData.length ?
            
          cocktailData.map((data) => (
          
            <li key={data._id}>
              <h3>{data.name}</h3>
              <p>Instructions: {data.instructions}</p>
              <p>Ingredients: {data.ingredients}</p>
            </li>
          )): (
          <>
            <p>No content has been added yet! </p>
            <p>Search and add a cocktail to your favourites!</p>
            
            </>
          )      
        }
      </ul>
      <SearchAgain />
        </section>
      </>
    )
  
  }
export default Favourites