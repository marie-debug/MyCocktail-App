import React from 'react'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

export const SaveButton = () => {
  return (
    <div className="d-flex justify-content-center">
        <Button variant="warning"><Link to="/Favourites">Save to Favorites</Link></Button>
    </div>
  )
}

export default SaveButton
