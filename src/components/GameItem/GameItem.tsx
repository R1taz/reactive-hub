import styles from './styles.module.css'

interface Props {
	src?: string
	nameGame: string
	developers: string
	release: number
}

const GameItem = ({ nameGame, developers, release }: Props) => {
	return (
		<div className={styles.gameItem}>
			<div>
				<img src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
				<div className={styles.info}>
					<p>{nameGame}</p>
					<p className={styles.italic}>Developers: {developers}</p>
					<p className={styles.italic}>Release date: {release}</p>
					<p>Game Information {`→`}</p>
				</div>
			</div>
		</div>
	)
}

export default GameItem
