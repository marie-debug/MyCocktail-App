import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCocktail } from '../features/cocktailSlice'
 


function CocktailForm() {
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

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(addCocktail({text}))
    UNSAFE_DataRouterStateContext('')
  }


  return (
    <>
      <section className='content'>
        <h1>Add a cocktail</h1>
        <p>Add your own Cocktail to your Favourites List.</p>
      </section>

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

export default CocktailForm