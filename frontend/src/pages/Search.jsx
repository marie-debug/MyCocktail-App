import React, {useState,useEffect} from 'react'
import SearchBox from '../components/SearchBox'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

import { useNavigate } from "react-router-dom"

function Search() {

  const [searchField,setSearchField]= useState('')
  
  
  const onSearchChange = (event) => {
    setSearchField(event.target.value)
    console.log(event.target.value)
     
     
 }



const navigate = useNavigate()

const onClickHandler = (searchText) => navigate(`/cocktailList?searchtext=${searchText}`)


 return (
  <>
    <Container>
      <Row className='heading'>
        <Col>
          <h1>It's cocktail hour!</h1>
          <p>It's that easy to search your perfect cocktail.</p>
          <SearchBox searchChange={onSearchChange}/>
          <div className="d-flex justify-content-center">

            <Button variant= "warning" size="lg" onClick ={()=>{onClickHandler(searchField)}}>Search</Button>
          </div>
        </Col>
      </Row>
    </Container>
  </>


)
}

export default Search