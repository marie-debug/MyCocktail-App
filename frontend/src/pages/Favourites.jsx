import React, { useEffect, useState } from "react";
import SearchAgain from "../components/SearchAgain";
import ImageFavourites from "../components/ImageFavourites";
import Row from "react-bootstrap/Row";

import Container from "react-bootstrap/Container";
import FavouriteCard from "../components/FavouriteCard";

function Favourites() {
  const [favourites, setFavourites] = useState(null);
  const GetFavouriteCocktails = () => {
    try {
      fetch(`http://localhost:3000/my/cocktail`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          {
            setFavourites(data);
          }
        });
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  async function deleteFavourite(id) {

    
    
    try {
      const response = await fetch("http://localhost:3000/my/cocktail/" + id, {
        method: "DELETE",
      });
      console.log(response)
      if (response.status === 204) {
        
        console.log("successfully deleted");
        let newFavouritesList = favourites.filter(
          (favouriteItem) => favouriteItem._id !== id
        );
    
        setFavourites(newFavouritesList);
      }
    } catch (err) {
      console.log("failed to delete", err);
    }
  }

  useEffect(() => {
    GetFavouriteCocktails();
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
          {Array.isArray(favourites) && favourites.length ? (
            favourites.map((favourite, i) => (
              <FavouriteCard
                key={i}
                favourite={favourite}
                deleteFavourite={deleteFavourite}
              />
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
