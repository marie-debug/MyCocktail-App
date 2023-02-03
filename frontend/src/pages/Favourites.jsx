import React, { useEffect, useState } from "react"
import SearchAgain from "../components/SearchAgain"
import ImageFavourites from "../components/ImageFavourites"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"

function Favourites() {
  const [cocktailData, setCocktailData] = useState(null);
  const fetchData = () => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_API}/my/cocktail`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          {
            setCocktailData(data);
          }
        });
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Container fluid className="card-cocktail">
        <Row>
        <h1>My favourites</h1>
        <span>Here's to alcohol, the rose colored glasses of life!</span>
        <ImageFavourites />
  
        </Row>
    <Row>     
          {Array.isArray(cocktailData) && cocktailData.length ? (
            cocktailData.map((data) => (
              <>
              <Col md={12}>
               {/* key={data._id} */}
                <h2>
                  <u>{data.name.toUpperCase()}</u>
                </h2>
              
                <span style={{ fontWeight: "bold" }}>Ingredients:</span>
                {data.ingredients.map((ingred) => (
                  <ol>{ingred}</ol>
                ))}
              
                <span class="mx-auto" style={{ fontWeight: "bold" }}>
                  Instructions:
                </span>
                <p>{data.instructions}</p>
                </Col>
                </>
              
            ))
          ) : (
            <>
              <p>No content has been added yet! </p>
              <p>Search and add a cocktail to your favourites!</p>
            </>
          )}
        
   </Row>
        <Row>
        <SearchAgain />
        </Row>
        
      </Container>
    </>
  );
}
export default Favourites;