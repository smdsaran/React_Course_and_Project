import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem";
import Classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const MealsFetch = async () => {
      const response = await fetch(
        "https://react-http-e085c-default-rtdb.firebaseio.com/Meals.json"
      );

      console.log(response);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const fetchedMeals = [];

      for (const key in data) {
        fetchedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }

      setMeals(fetchedMeals);
      setIsLoading(false);
    };

    MealsFetch().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  let mealsList = meals.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  if (isLoading) {
    mealsList = <p className={Classes.Loading}>Loading ...</p>;
  }

  if (httpError) {
    mealsList = <p className={Classes.Loading}>{httpError}</p>;
  }

  return (
    <section className={Classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
