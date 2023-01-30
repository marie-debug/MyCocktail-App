

const Cocktail =({cocktail})=>{

function saveCocktail(cocktail){
  //TODO Get actual user ID from cookie session
  const userID = 'bvnvmgvjhvmjv'

  favouriteCocktail ={ 
    "userID": userID,
    "name":cocktail.name , 
    "ingredients":cocktail.ingredients,
    "instructions":cocktail.instructions
  }

    fetch('http://localhost:3000/my/cocktail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(favouriteCocktail)
    }).then(response => {
        return response.json()
      })
      .then(data => {
       console.log(data)
      })

 
  //TODO Call create function that saves cocktail and user to mongodb
}

  return (
    <>
      <section className='container'>
        <section className='card-cocktail'>
          <h2>{cocktail.name.toUpperCase()}</h2>
          <span style={{ fontWeight: 'bold' }}>Ingredients:</span>
          <p>{cocktail.ingredients}</p>
          <span style={{ fontWeight: 'bold' }}>Instructions:</span>
          <p>{cocktail.instructions}</p>
          <div class="d-flex justify-content-center ">
          <button type='submit' className='btn btn-warning .button1' onClick={()=>{saveCocktail(cocktail)}}>Save to Favorites</button>
          </div>
        </section>
      </section>
    </>
  )
}

export default Cocktail