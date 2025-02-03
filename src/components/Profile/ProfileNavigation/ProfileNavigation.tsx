import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'

const ProfileNavigation = () => {
	return (
		<nav className={styles.navigation}>
			<NavLink to='/profile/games'>My favorite games</NavLink>
			<NavLink to='/profile/reviews'>My reviews</NavLink>
		</nav>
	)
}

export default ProfileNavigation
