import React, { useEffect, useState } from "react";
import SearchAgain from "../components/SearchAgain";
import ImageFavourites from "../components/ImageFavourites";
import Row from "react-bootstrap/Row";

import Container from "react-bootstrap/Container";
import FavouriteCard from "../components/FavouriteCard";

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
            cocktailData.map((data,i) => (
              <FavouriteCard key={i} favourite={data}/>
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
