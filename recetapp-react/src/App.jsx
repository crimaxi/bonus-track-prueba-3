import { useMemo, useState } from 'react'
import { recetas } from './data/recetas'
import FiltroCategoria from './components/FiltroCategoria'
import ListaRecetas from './components/ListaRecetas'
import './App.css'

function App() {
  const [categoria, setCategoria] = useState('todas')
  const [busqueda, setBusqueda] = useState('')

  const recetasFiltradas = useMemo(() => {
    // Normalizar y limitar búsqueda
    const termino = String(busqueda || '').trim().slice(0, 50).toLowerCase()

    return recetas.filter((receta) => {
      const coincideCategoria = categoria === 'todas' || receta.categoria === categoria

      if (!termino) return coincideCategoria

      const nombre = String(receta.nombre || '').toLowerCase()
      const coincideBusqueda = nombre.includes(termino)

      return coincideCategoria && coincideBusqueda
    })
  }, [categoria, busqueda])

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>RecetApp</h1>
        <p>Descubre recetas caseras fáciles y deliciosas.</p>
      </header>

      <div className="controles">
        <FiltroCategoria categoria={categoria} onChange={setCategoria} />

        <div className="filtro-busqueda">
          <label htmlFor="busqueda">Buscar por nombre:</label>
          <input
            id="busqueda"
            type="search"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value.slice(0, 50))}
            placeholder="Ej: Tarta"
            maxLength={50}
          />
        </div>
      </div>

      <ListaRecetas recetas={recetasFiltradas} />
    </main>
  )
}

export default App
