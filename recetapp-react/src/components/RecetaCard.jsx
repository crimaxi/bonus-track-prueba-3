import PropTypes from 'prop-types'

function RecetaCard({ nombre, origen, porciones, categoria, descripcion, ingredientes, esVegetariana }) {
  const categoriaClass = (categoria || '').toLowerCase()

  return (
    <article className={`receta-card categoria-${categoriaClass}`}>
      <header>
        <h3>{nombre}</h3>
        <p className="receta-meta">{origen} — {porciones} porciones</p>
      </header>

      <p className="receta-categoria">Categoría: {categoria}</p>

      <p className="receta-descripcion">{descripcion}</p>

      <p>
        <strong>Ingredientes:</strong> {Array.isArray(ingredientes) ? ingredientes.join(', ') : ''}
      </p>

      {esVegetariana && <span className="etiqueta-veg">VEG</span>}
    </article>
  )
}

RecetaCard.propTypes = {
  nombre: PropTypes.string,
  origen: PropTypes.string,
  porciones: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  categoria: PropTypes.string,
  descripcion: PropTypes.string,
  ingredientes: PropTypes.arrayOf(PropTypes.string),
  esVegetariana: PropTypes.bool,
}

RecetaCard.defaultProps = {
  nombre: 'Receta sin nombre',
  origen: 'Desconocido',
  porciones: 1,
  categoria: 'Fondo',
  descripcion: 'Sin descripción disponible.',
  ingredientes: [],
  esVegetariana: false,
}

export default RecetaCard
