import styles from './styles.module.css'
import { NavLink, NavLinkRenderProps } from 'react-router-dom'

const ProfileNavigation = () => {
	const isActiveLink = ({ isActive }: NavLinkRenderProps) => {
		return isActive ? styles.active : ''
	}

	return (
		<nav className={styles.navigation}>
			<NavLink to='/profile/games' className={isActiveLink}>
				My favorite games
			</NavLink>
			<NavLink to='/profile/reviews' className={isActiveLink}>
				My reviews
			</NavLink>
		</nav>
	)
}

export default ProfileNavigation
