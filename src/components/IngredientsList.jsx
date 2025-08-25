import { Icon } from "@iconify/react/dist/iconify.js";

function IngredientsList(props) {
  const ingredientsListItems = props.ingredients.map((ingredient, index) => (
    <li key={`${ingredient}-${index}`} className="ingredients-item">
      <span>{ingredient}</span>
      <button
        className="remove-btn"
        onClick={() => props.removeIngredient(index)}
        aria-label={`Remove ${ingredient}`}
      >
        <Icon icon="mingcute:close-fill" width="24" height="24" />
      </button>
    </li>
  ))

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {
        props.ingredients.length > 3 &&
        <div className="get-recipe-container" ref={props.ref}>
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      }
    </section>
  )
}

export default IngredientsList;
