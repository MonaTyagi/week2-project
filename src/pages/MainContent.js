import ArticleCard from "../components/ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainContent() {
  const [recipe, set_recipe] = useState([]);
  const [counter, set_counter] = useState(0);

  useEffect(() => {
    async function getRecipes() {
      if (counter < 4) {
        set_counter(counter + 1);
      }
      const URL = "https://www.themealdb.com/api/json/v1/1/random.php";

      const response = await axios.get(URL);
      set_recipe((recipe) => [...recipe, response.data.meals]);
    }
    getRecipes();
  }, [counter]);

  //console.log(recipe.length);
  console.log(recipe);

  return (
    <div>
      <h1>This is the MainContent page</h1>
      <div>
        {recipe.length > 1
          ? recipe.map((meal) => (
              <ArticleCard
                imgurl={meal[0].strMealThumb}
                mealname={meal[0].strMeal}
                instructions={meal[0].strInstructions}
                key={meal[0].idMeal}
              />
            ))
          : "Loading..."}
      </div>
    </div>
  );
}
