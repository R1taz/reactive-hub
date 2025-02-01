import { CommonParamsInCurrentGame } from '@/interfaces/gamesInterface'
import styles from './styles.module.css'

interface Props {
	developers: CommonParamsInCurrentGame[]
	publishers: CommonParamsInCurrentGame[]
}

const GameDevelopers = ({ developers, publishers }: Props) => {
	return (
		<div className={styles.gameDevelopers}>
			<p>
				Publishers: {publishers.map(publisher => publisher.name).join(', ')}
			</p>
			<p>
				Developers: {developers.map(developer => developer.name).join(', ')}
			</p>
		</div>
	)
}

export default GameDevelopers
