import { useState } from "react"
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";// Main.jsx
import { getRecipeFromMistral, getRecipeFromChefClaude } from '../ai.js'

function Main() {

  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState("")

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown)
  }

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient") // get the value of the input field with the name ingredient
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  return (
    <main>
      <form className="add-ingredient-form" action={addIngredient}>
        <input
          type="text"
          name="ingredient"
          placeholder="e.g. oregano"
          aria-label="Add ingredient" />
        <button>Add Ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
        />
      )}

      {
        recipe &&
        <Recipe recipe={recipe} />
      }



    </main>
  )

}

export default Main