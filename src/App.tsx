import { Navigate, Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout'
import GamesPage from './pages/GamesPage/GamesPage'
import GamePage from './pages/GamePage/GamePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import NewsPage from './pages/NewsPage/NewsPage'

function App() {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Navigate to='/news' />} />
				<Route path='news' element={<NewsPage />} />
				<Route path='games' element={<GamesPage />} />
				<Route path='games/:id' element={<GamePage />} />
				<Route path='reviews' element={<div>Reviews page</div>} />
				<Route path='profile/*' element={<ProfilePage />} />
			</Route>
		</Routes>
	)
}

export default App
