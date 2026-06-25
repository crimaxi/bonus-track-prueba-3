# ANALISIS.md — Parte A: Identificación de elementos del framework

**Proyecto:** RecetApp  
**Asignatura:** Programación Front End (TI3031) — Sumativa U3 · V4  
**Criterio evaluado:** 3.1.1

---

## Tabla de elementos de React

| Elemento de React | ¿Dónde lo uso en este problema? | ¿Por qué es el adecuado? |
|---|---|---|
| **Componente** | Divido la interfaz en tres piezas independientes: `RecetaCard` (muestra una receta individual), `ListaRecetas` (agrupa todas las tarjetas) y `FiltroCategoria` (contiene los botones de filtrado). En `App.jsx` ensamblo todo. | Los componentes permiten separar responsabilidades: cada pieza hace una sola cosa, es reutilizable y fácil de mantener. Si el chef pide cambiar el diseño de una tarjeta, solo toco `RecetaCard` sin afectar el resto. |
| **JSX** | En cada componente uso JSX para describir la estructura visual: por ejemplo, en `RecetaCard.jsx` escribo `<div className="card">`, `<h2>{nombre}</h2>`, `<ul>{ingredientes.map(...)}</ul>`, etc. | JSX mezcla la lógica de JavaScript con la descripción de la interfaz en un mismo lugar, de forma legible. Es más claro que llamar a `React.createElement()` directamente y permite ver de un vistazo qué se va a renderizar en pantalla. |
| **Props** | `ListaRecetas` recibe el array `recetas` como prop desde `App.jsx`. `RecetaCard` recibe `nombre`, `origen`, `porciones`, `categoria`, `descripcion` e `ingredientes` como props desde `ListaRecetas`. `FiltroCategoria` recibe la categoría seleccionada y una función `onCambioFiltro` como props. | Las props son el mecanismo para pasar datos hacia abajo entre componentes (flujo unidireccional). Como los datos de las recetas son fijos (vienen de `recetas.js`) y la lógica de filtrado vive en `App.jsx`, tiene sentido enviar la información hacia los hijos mediante props en lugar de que cada componente acceda directamente a los datos. |
| **Estado (useState)** | En `App.jsx` declaro dos variables de estado: `categoriaSeleccionada` (valor inicial `"Todas"`) y `textoBusqueda` (valor inicial `""`). Ambas se actualizan cuando el usuario interactúa con `FiltroCategoria` o con el campo de búsqueda, y provocan que la lista se vuelva a renderizar con los resultados filtrados. | El estado modela datos que cambian en el tiempo como respuesta a acciones del usuario. A diferencia de las props, el estado pertenece al componente que lo declara y puede modificarse. Aquí el filtro y la búsqueda son exactamente ese tipo de dato: nacen vacíos y cambian cada vez que el usuario interactúa. |
| **Renderizado de listas (.map + key)** | En `ListaRecetas.jsx` recorro el array de recetas con `.map()` y devuelvo un `<RecetaCard key={receta.id} .../>` por cada elemento. | `.map()` es la forma idiomática de transformar un array de datos en un array de elementos JSX. La prop `key` (usando el `id` único de cada receta, no el índice) permite que React identifique qué elementos cambiaron, se agregaron o eliminaron al re-renderizar, optimizando las actualizaciones del DOM. |
| **Renderizado condicional** | 1. En `App.jsx`, después de aplicar los filtros, muestro `<p>No hay recetas que coincidan</p>` cuando el array filtrado queda vacío. 2. En `RecetaCard.jsx`, muestro una etiqueta `"🌿 VEG"` solo cuando `esVegetariana` es `true`. 3. También aplico una clase CSS distinta según la `categoria` (Entrada / Fondo / Postre). | El renderizado condicional permite que la interfaz se adapte al estado actual sin duplicar componentes. En lugar de crear una versión del componente para cada caso posible, uso expresiones como `&&` o el operador ternario `? :` dentro del JSX para decidir en tiempo de ejecución qué mostrar. |

---

## Preguntas de análisis

### 1. ¿Qué ventaja tiene dividir el recetario en componentes en lugar de escribir todo en un solo archivo?

hacer la aplicacion en componentes pequeños mejora la capacidad de mantencion, entendimiento y escalado del codigo, si todo estuviera en un solo archivo cualquier cambio implicaria la busqueda en el codigo de la seccion que se quiere modificar lo que puede resultar tedioso en comparacion a solo modificar el archivo correspondiente a la seccion que se quiere modificar

---

### 2. ¿Qué diferencia hay entre props y estado? Da un ejemplo concreto de cada uno tomado de esta aplicación.

**Props:** son datos que un componente recibe desde fuera y que él mismo no puede modificar. Son de solo lectura y fluyen hacia abajo. El componente hijo los usa tal como llegan.

> **Ejemplo:** `RecetaCard` recibe `nombre="Tarta de Verduras"` como prop desde `ListaRecetas`. `RecetaCard` muestra ese nombre en pantalla, pero nunca lo cambia; si el nombre cambia, el cambio proviene del padre.

**Estado** son datos que un componente administra internamente y que pueden cambiar en respuesta a acciones del usuario. Cuando el estado cambia, React vuelve a renderizar el componente automáticamente.

> **Ejemplo concreto en RecetApp:** En `App.jsx` tenemos `const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas")`. Cuando el usuario hace clic en el botón "Postre" dentro de `FiltroCategoria`, se llama `setCategoriaSeleccionada("Postre")`, el estado se actualiza, y la lista se re-renderiza mostrando solo los postres. Ese valor vive y cambia dentro de `App.jsx`; los hijos no lo modifican directamente, solo lo reciben como prop si lo necesitan.

---