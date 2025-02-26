import { convertDate } from '@/helpers/convertDate'
import styles from './styles.module.css'

interface Props {
	isReleased: boolean
	released: string
	updated: string
}

const GameRelease = ({ isReleased, released, updated }: Props) => {
	const convertedDate = convertDate(updated)
	return (
		<div className={styles.release}>
			<p>{isReleased ? `Date of released: ${released}` : 'In Beta-version'}</p>
			<p>{isReleased ? `Date of last update: ${convertedDate}` : ''}</p>
		</div>
	)
}

export default GameRelease
