import RecetaCard from './RecetaCard'
import PropTypes from 'prop-types'

function ListaRecetas({ recetas }) {
  if (!Array.isArray(recetas) || recetas.length === 0) {
    return <p>No se encontraron recetas para esa categoría.</p>
  }

  return (
    <section className="lista-recetas">
      {recetas.map((receta) => (
        <RecetaCard key={receta.id} {...receta} />
      ))}
    </section>
  )
}

ListaRecetas.propTypes = {
  recetas: PropTypes.arrayOf(PropTypes.object),
}

ListaRecetas.defaultProps = {
  recetas: [],
}

export default ListaRecetas
