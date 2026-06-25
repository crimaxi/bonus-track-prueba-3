import RecetaCard from './RecetaCard'

function ListaRecetas({ recetas }) {
  if (recetas.length === 0) {
    return <p>No se encontraron recetas para esa categoría.</p>
  }

  return (
    <section className="lista-recetas">
      {recetas.map((receta) => (
        <RecetaCard key={receta.id} receta={receta} />
      ))}
    </section>
  )
}

export default ListaRecetas
