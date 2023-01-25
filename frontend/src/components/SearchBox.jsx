import React from 'react'

const searchbox = ({searchChange}) => {


  return (
    <div className='form-group'>
            <input 
                type='search' 
                className='form-group'
                placeholder= 'Search for your favourite cocktail by name or alcohol..'
                onChange={searchChange}/>
        </div>
  )
}

export default searchbox