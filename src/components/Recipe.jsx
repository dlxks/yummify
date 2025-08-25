import ReactMarkdown from 'react-markdown'

function Recipe(props) {

  return (
    <section className='suggested-recipe-container'>
      <h2>Recommended Recipe!</h2>
      <ReactMarkdown children={props.recipe} />
    </section>

  )

}

export default Recipe