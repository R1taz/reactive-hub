import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

const Navigation = () => {
	return (
		<div className={styles.navigation}>
			<NavLink to='/news'>Gaming News</NavLink>
			<NavLink to='/catalog'>Game Catalog</NavLink>
			<NavLink to='/blogs'>Game Reviews</NavLink>
			<NavLink to='/news'>Profile</NavLink>
		</div>
	)
}

export default Navigation
