import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import GamesCatalogPage from './pages/GamesCatalogPage/GamesCatalogPage'
import GameInfoPage from './pages/GameInfoPage/GameInfoPage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<div>News</div>} />
				<Route path='/games' element={<GamesCatalogPage />} />
				<Route path='/game' element={<GameInfoPage />} />
			</Route>
		</Routes>
	)
}

export default App
