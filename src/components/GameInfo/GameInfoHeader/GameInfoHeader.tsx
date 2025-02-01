import styles from './styles.module.css'

interface Props {
	gameName: string
}

const GameInfoHeader = ({ gameName }: Props) => {
	return (
		<div className={styles.header}>
			<h1>{gameName}</h1>
		</div>
	)
}

export default GameInfoHeader
