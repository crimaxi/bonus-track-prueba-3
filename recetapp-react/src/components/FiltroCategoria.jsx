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
        <option value="salado">Salado</option>
        <option value="dulce">Dulce</option>
      </select>
    </div>
  )
}

export default FiltroCategoria
