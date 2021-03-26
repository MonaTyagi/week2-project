import ArticleCard from "../components/ArticleCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MainContent() {
  const [recipe, set_recipe] = useState([]);
  const [counter, set_counter] = useState(0);

  useEffect(() => {
    async function getRecipes() {
      if (counter < 5) {
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
      <br />
      <h2>For now it's just showing one random recipe on each render</h2>
      <div>
        {recipe.length > 1 ? (
          <ArticleCard
            imgurl={recipe[0][0].strMealThumb}
            mealname={recipe[0][0].strMeal}
            instructions={recipe[0][0].strInstructions}
          />
        ) : (
          "Loading..."
        )}
      </div>
    </div>
  );
}
