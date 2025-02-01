import styles from './styles.module.css'

interface Props {
	isReleased: boolean
	released: string
	updated: string
}

const GameRelease = ({ isReleased, released, updated }: Props) => {
	return (
		<div className={styles.release}>
			<p>{isReleased ? `Date of released: ${released}` : 'In Beta-version'}</p>
			<p>{isReleased ? `Date of last update: ${updated}` : ''}</p>
		</div>
	)
}

export default GameRelease
