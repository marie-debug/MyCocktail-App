import React, { useEffect, useState } from "react";
import SearchAgain from "../components/SearchAgain";
import ImageFavourites from "../components/ImageFavourites";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import FavouriteCard from "../components/FavouriteCard";
import { toast } from "react-toastify";

function Favourites() {
  const [favourites, setFavourites] = useState(null);
  const GetFavouriteCocktails = () => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_API}/my/cocktail`)
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
    fetch(`${import.meta.env.VITE_BACKEND_API}/my/cocktail/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 204) {
          let newFavouritesList = favourites.filter(
            (favouriteItem) => favouriteItem._id !== id
          );
          setFavourites(newFavouritesList);
          toast.success(`cocktail deleted successfully!`);
        } else {
          toast.error("oops! Something went wrong");
        }
        return response.status;
      })
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
