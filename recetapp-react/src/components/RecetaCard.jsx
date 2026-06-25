function RecetaCard({ receta }) {
  return (
    <article className="receta-card">
      <h3>{receta.nombre}</h3>
      <p className="receta-categoria">Categoría: {receta.categoria}</p>
      <p>
        <strong>Ingredientes:</strong> {receta.ingredientes.join(', ')}
      </p>
      <div>
        <strong>Pasos:</strong>
        <ol>
          {receta.pasos.map((paso, index) => (
            <li key={index}>{paso}</li>
          ))}
        </ol>
      </div>
    </article>
  )
}

export default RecetaCard
