// My Favourite Cocktails saved page and Add a cocktail
import { useState, useEffect } from 'react'


function Favourites() {
  const [formData, setFormData] = useState({
    name: '',
    ingredients: '',
    instructions: '',
  })

  const { name, ingredients, instructions } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }


  return (
    <>
      <section className='content'>
        <h1>My favourites</h1>
        <p>Here's to alcohol, the rose colored glasses of life!</p>
      </section>

      <p>Add your own Cocktail to your Favourites List.</p>

      <section className='form'>
        <form onSubmit={onSubmit}> 
          <div className='form-group'>
            <input 
              type='text' 
              className='form-control' 
              id='name'
              name='name' value={name} 
              placeholder= 'Enter your cocktail name'
              onChange={onChange}
            />
            </div>
            <div className='form-group'> 
              <input 
              type='text' 
              className='form-control' 
              id='ingredients'
              name='ingredients' value={ingredients} 
              placeholder= 'Enter your cocktail ingredients'
              onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <input 
              type='text' 
              className='form-control' 
              id='instructions'
              name='instructions' value={instructions} 
              placeholder= 'Enter your cocktail instructions'
              onChange={onChange}
              />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-warning'>Add Cocktail</button>
            </div>
        </form>
      </section>
    </>
  )
  }

export default Favourites