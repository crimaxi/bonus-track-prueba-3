import { useMemo, useState } from 'react'
import { recetas } from './data/recetas'
import FiltroCategoria from './components/FiltroCategoria'
import ListaRecetas from './components/ListaRecetas'
import './App.css'

function App() {
  const [categoria, setCategoria] = useState('todas')

  const recetasFiltradas = useMemo(() => {
    if (categoria === 'todas') return recetas
    return recetas.filter((receta) => receta.categoria === categoria)
  }, [categoria])

  console.log('Recetas cargadas:', recetas)
  console.log('Filtro seleccionado:', categoria)

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>RecetApp</h1>
        <p>Descubre recetas caseras fáciles y deliciosas.</p>
      </header>

      <FiltroCategoria categoria={categoria} onChange={setCategoria} />

      <ListaRecetas recetas={recetasFiltradas} />
    </main>
  )
}

export default App
