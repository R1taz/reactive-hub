import { ITypeSkeleton } from '@/interfaces/skeletonInterface'
import styles from './styles.module.css'

interface Props {
	count?: number
	type?: ITypeSkeleton
	height?: number
}

const Skeleton = ({ count = 1, type = 'item', height }: Props) => {
	return (
		<div className={styles.list}>
			{count > 1 && (
				<ul>
					{[...Array(count)].map((_, index) => (
						<li key={index} className={styles[type]}></li>
					))}
				</ul>
			)}

			{count === 1 && (
				<li
					style={{ height: height ? height : '' }}
					className={styles[type]}
				></li>
			)}
		</div>
	)
}

export default Skeleton
