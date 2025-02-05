import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import GamesCatalogPage from './pages/GamesCatalogPage/GamesCatalogPage'
import GameInfoPage from './pages/GameInfoPage/GameInfoPage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import NewsPage from './pages/NewsPage/NewsPage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Navigate to='/news' />} />
				<Route path='/news' element={<NewsPage />} />
				<Route path='games' element={<GamesCatalogPage />} />
				<Route path='game' element={<GameInfoPage />} />
				<Route path='profile/*' element={<ProfilePage />} />
			</Route>
		</Routes>
	)
}

export default App
