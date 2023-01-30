import React from 'react'
import { Link } from "react-router-dom"

export const SearchAgain = () => {
  return (
    <div class="row justify-content-center">
        <button type='submit' className='btn btn-warning'><Link to="/">Search Again</Link></button>
    </div>
  )
}

export default SearchAgain