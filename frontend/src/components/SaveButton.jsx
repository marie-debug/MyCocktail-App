import React from 'react'
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const SaveButton = () => {

  const notify = () => {
    toast.success("Successfully added!")
  }


  return (
    <div className="d-flex justify-content-center">
        <Button variant="warning" onClick={notify}>Save to Favourites</Button>
        <ToastContainer autoClose={1000} closeOnClick={true} pauseOnHover={false}/>
    </div>
  )
}



export default SaveButton

