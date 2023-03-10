import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { toast } from "react-toastify";

const Cocktail = ({ cocktail, itemNumber }) => {
  async function saveCocktail(cocktail) {
    //TODO Get actual user ID from cookie session
    const userID = 1234;

    let favouriteCocktail = {
      id: userID,
      name: cocktail.name,
      ingredients: cocktail.ingredients,
      instructions: cocktail.instructions,
    };

    fetch(`${import.meta.env.VITE_BACKEND_API}/my/cocktail`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favouriteCocktail),
    })
      .then((response) => {
        if (response.status === 201) {
          toast.success(`saved ${favouriteCocktail.name} successfully!`);
        } else if (response.status === 200) {
          toast.success(
            `Already saved ${favouriteCocktail.name} successfully!`
          );
        } else {
          toast.error("oops! Something went wrong");
        }
        return response.status;
      })
      .then((status) => {
        if (status === 200 || status === 201) {
          setTimeout(() => (window.location = "/Favourites"), 1500);
        }
      });

  }

  return (
    <section className="card-cocktail pb-4 m-4">
      <div className="d-flex align-items-center flex-column">
        <h2 className="text-center">
          {itemNumber + " . " + cocktail.name.toUpperCase()}
        </h2>
        <h4 className="text-center m-4">Ingredients:</h4>
        <ListGroup as="ul" variant="flush">
          {cocktail.ingredients.map((ingred, i) => (
            <ListGroup.Item className="text-center" key={i} as="li">
              {ingred}
            </ListGroup.Item>
          ))}
        </ListGroup>
        <h4 className="text-center m-4">Instructions:</h4>
        <p className="w-50 text-center">{cocktail.instructions}</p>
      </div>

      <div className="d-flex justify-content-center ">
        <Button
          variant="warning"
          onClick={() => {
            saveCocktail(cocktail);
          }}
        >
          Save to Favorites
        </Button>
      </div>
    </section>
  );
};
export default Cocktail;
