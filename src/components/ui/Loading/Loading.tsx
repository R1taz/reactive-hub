import styles from './styles.module.css'
import loadingImg from '../../../assets/loading.gif'

interface Props {
	top?: number
	bottom?: number
	left?: number
	right?: number
}

const Loading = ({ top, bottom, left, right }: Props) => {
	return (
		<img
			style={{ top, bottom, left, right }}
			className={styles.loading}
			src={loadingImg}
			alt='loading...'
		/>
	)
}

export default Loading
