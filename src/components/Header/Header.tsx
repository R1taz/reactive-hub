import styles from './styles.module.css'
import sunSVG from '../../assets/sun-svgrepo-com.svg'

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.content}>
				<div>
					<h1>Reactive Hub</h1>
					<p>Saturday, 12 January 2025, 17:08</p>
				</div>

				<div>
					<img src={sunSVG} alt='Солнце' />
					<p>+18°C</p>
				</div>
			</div>
		</div>
	)
}

export default Header
