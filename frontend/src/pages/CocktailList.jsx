// List of cocktails available to display from the API
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Cocktail from "./Cocktail";
import SearchAgain from "../components/SearchAgain";
import { toast } from "react-toastify";

const CocktailList = () => {
  const [cocktails, setCocktails] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams();
  let searchText = searchParams.get("searchtext");

  const fetchData = () => {
    fetch(`${import.meta.env.VITE_BACKEND_API}/cocktails/${searchText}`)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Got some drinks!!");
          return response.json();
        } else {
          toast.error("Oooops! Something went wrong");
        }
      })
      .then((data) => {
        const count = data === undefined ? 0 : data.length;
        toast.info(`Wohoo we found ${count} cocktails that match your search!`);

        setCocktails(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="content text-center">
        <h1>Keep Calm and drink a cocktail</h1>
        <h2>Browse through our list of cocktails</h2>
      </section>

      {Array.isArray(cocktails) && cocktails.length ? (
        cocktails.map((cocktail, i) => {
          return <Cocktail key={i} itemNumber={i + 1} cocktail={cocktail} />;
        })
      ) : (
        <>
          <p>
            Ow it seems we can't find a cocktail for you please search again ..
          </p>
        </>
      )}

      <SearchAgain />
    </>
  );
};

export default CocktailList;
