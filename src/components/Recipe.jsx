import ReactMarkdown from 'react-markdown'

function Recipe(props) {

  return (
    <section className='suggested-recipe-container'>
      <ReactMarkdown children={props.recipe} />
    </section>

  )

}

export default Recipe