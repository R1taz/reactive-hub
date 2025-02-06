import styles from './styles.module.css'
import { useState } from 'react'

interface Props {
	total_count: number
	current_page: number
	portion_size: number
	setPage: (i: number) => void
}

const Paginator = ({
	total_count,
	current_page,
	portion_size,
	setPage,
}: Props) => {
	const allPortions = Math.ceil(total_count / portion_size)
	const [currentPortion, setCurrentPortion] = useState(
		Math.ceil(current_page / portion_size)
	)

	const leftPage = (currentPortion - 1) * portion_size + 1
	const rightPage = Math.min(total_count, currentPortion * portion_size)

	const btns = []

	for (let i = leftPage; i <= rightPage; i++) {
		btns.push(
			<button
				key={i}
				onClick={() => setPage(i)}
				className={i === current_page ? styles.active : ''}
			>
				{i}
			</button>
		)
	}

	return (
		<div className={styles.paginator}>
			<button
				onClick={() => {
					setCurrentPortion(prev => prev - 1)
					setPage((currentPortion - 2) * portion_size + 1)
				}}
				disabled={currentPortion === 1}
			>
				{'←'}
			</button>
			{btns.map(btn => btn)}
			<button
				disabled={currentPortion + 1 > allPortions}
				onClick={() => {
					setCurrentPortion(prev => prev + 1)
					setPage(currentPortion * portion_size + 1)
				}}
			>
				{'→'}
			</button>
		</div>
	)
}

export default Paginator
