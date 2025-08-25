import { useEffect, useRef, useState } from "react"
import IngredientsList from "./IngredientsList";
import Recipe from "./Recipe";// Main.jsx
import { getRecipeFromMistral, getRecipeFromChefClaude } from '../ai.js'

function Main() {

  const [ingredients, setIngredients] = useState([]);

  const [recipe, setRecipe] = useState("")
  const recipeSection = useRef(null) // reference to the recipe section

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown)
  }

  const addIngredient = (formData) => {
    const newIngredient = formData.get("ingredient") // get the value of the input field with the name ingredient
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }

  const removeIngredient = (index) => {
    setIngredients(prevIngredients => 
      prevIngredients.filter((_, i) => i !== index)
    )
  }

  // Scroll into view of recipe once loaded
  useEffect(() => {
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [recipe])

  return (
    <main>
      <p>Tell us what you’ve got, and we’ll cook up a recipe for you.</p>

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
          removeIngredient={removeIngredient}
        />
      )}

      {
        recipe &&
        // Add ref property to the div element
        <div ref={recipeSection}>
          <Recipe
            recipe={recipe}
          />
        </div>
      }
    </main>
  )

}

export default Main