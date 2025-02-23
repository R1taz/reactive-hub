import { NavLink, NavLinkRenderProps } from 'react-router-dom'
import styles from './styles.module.css'

const Navigation = () => {
	const isActiveLink = ({ isActive }: NavLinkRenderProps) => {
		return isActive ? styles.active : ''
	}

	return (
		<div className={styles.navigation}>
			<NavLink to='/news' className={isActiveLink}>
				News
			</NavLink>
			<NavLink to='/games' className={isActiveLink}>
				Game Catalog
			</NavLink>
			<NavLink to='/reviews' className={isActiveLink}>
				Game Reviews
			</NavLink>
			<NavLink to='/profile' className={isActiveLink}>
				Profile
			</NavLink>
		</div>
	)
}

export default Navigation
