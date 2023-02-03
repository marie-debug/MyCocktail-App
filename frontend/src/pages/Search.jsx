import React, {useState,useEffect} from 'react';
import SearchBox from '../components/SearchBox'
import { Container, Row, Col } from "react-bootstrap"
import Footer from '../components/Footer'

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
          <div class="row justify-content-center">
            <button type='submit' className='btn btn-warning' onClick ={()=>{onClickHandler(searchField)}}>Search</button>
          </div>
        </Col>
      </Row>
    </Container>
    <Footer />
  </>


)
}

export default Search