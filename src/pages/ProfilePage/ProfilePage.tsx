import ProfileNavigation from '@/components/Profile/ProfileNavigation/ProfileNavigation'
import styles from './styles.module.css'
import ProfileAvatar from '@/components/Profile/ProfileAvatar/ProfileAvatar'
import { Route, Routes } from 'react-router-dom'
import ProfileGames from '@/components/Profile/ProfileGames/ProfileGames'

const ProfilePage = () => {
	return (
		<div className={styles.profile}>
			<h1>My profile</h1>
			<ProfileAvatar />
			<ProfileNavigation />
			<Routes>
				<Route path='games' element={<ProfileGames />} />
			</Routes>
		</div>
	)
}

export default ProfilePage
