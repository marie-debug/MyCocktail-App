import React from 'react'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

export const SearchAgain = () => {
  return (
    <div className="d-flex justify-content-center">
        <Button variant="warning"><Link to="/">Search Again</Link></Button>
    </div>
  )
}

export default SearchAgain