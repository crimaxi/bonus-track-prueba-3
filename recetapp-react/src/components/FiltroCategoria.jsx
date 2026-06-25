import PropTypes from 'prop-types'

function FiltroCategoria({ categoria, onChange }) {
  return (
    <div className="filtro-categoria">
      <label htmlFor="categoria-select">Filtrar por categoría:</label>
      <select
        id="categoria-select"
        value={categoria}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="todas">Todas</option>
        <option value="Entrada">Entrada</option>
        <option value="Fondo">Fondo</option>
        <option value="Postre">Postre</option>
      </select>
    </div>
  )
}

FiltroCategoria.propTypes = {
  categoria: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

FiltroCategoria.defaultProps = {
  categoria: 'todas',
}

export default FiltroCategoria
