import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<NavLink to='/news'>News</NavLink>
			<NavLink to='/games'>Game Catalog</NavLink>
			<NavLink to='/reviews'>Game Reviews</NavLink>
			<NavLink to='/profile'>Profile</NavLink>
		</div>
	)
}

export default Navigation
