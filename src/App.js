import './App.css'
import { Routes, Route } from 'react-router-dom'
// import $ from 'jquery'
import HomePage from './views/HomePage'
import PonentesPage from './views/PonentesPage/PonentesPage'
import ProgramaPage from './views/ProgramaPage/ProgramaPage'
import FeriaVirtualPage from './views/FeriaVirtualPage/FeriaVirtualPage'
import JornadasPage from './views/JornadasPage'

function App() {
	return (
		<Routes>
			<Route exact path="/" element={<HomePage />} />
			<Route exact path="programa" element={<ProgramaPage />} />
			<Route exact path="ponentes" element={<PonentesPage />} />
			<Route exact path="feriaVirtual" element={<FeriaVirtualPage />} />
			<Route exact path="jornadas" element={<JornadasPage />} />
		</Routes>
	)
}

export default App
