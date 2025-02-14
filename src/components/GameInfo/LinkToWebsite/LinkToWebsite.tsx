import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'

interface Props {
	link: string
}

const LinkToWebsite = ({ link }: Props) => {
	return (
		<div className={styles.link}>
			<NavLink to={link}>Link to official website game</NavLink>
		</div>
	)
}

export default LinkToWebsite
