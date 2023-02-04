import ListGroup from "react-bootstrap/ListGroup";
import Button from 'react-bootstrap/Button'


const Cocktail = ({ cocktail, itemNumber }) => {
  
  function saveCocktail(cocktail) {
    //TODO Get actual user ID from cookie session
    const userID = 1234;

    let favouriteCocktail = {
      id: userID,
      name: cocktail.name,
      ingredients: cocktail.ingredients,
      instructions: cocktail.instructions,
    };

    fetch("http://localhost:3000/my/cocktail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favouriteCocktail),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
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

      <div className="text-center"></div>
      <div className="d-flex justify-content-center ">
        <Button variant= "warning" onClick={() => {saveCocktail(cocktail)}}>
          <SaveButton />
        </Button>
      </div>
    </section>
  );
};

export default Cocktail;
