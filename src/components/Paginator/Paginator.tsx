import styles from './styles.module.css'
import { useState } from 'react'

const Paginator = () => {
	const total_count = 50000
	const page_size = 5
	const current_page = 1

	const allPortions = Math.ceil(total_count / page_size)
	const [currentPortion, setCurrentPortion] = useState(Math.ceil(current_page / page_size))

	const rightPage = (currentPortion - 1) * page_size + 1
	const leftPage = Math.min(total_count, currentPortion * page_size)

	const btns = []

	for (let i = rightPage; i <= leftPage; i++) {
		btns.push(
			<button key={i} className={i === current_page ? styles.active : ''}>
				{i}
			</button>
		)
	}

	return (
		<div className={styles.paginator}>
			<button onClick={() => setCurrentPortion(prev => prev - 1)} disabled={currentPortion === 1}>
				{'←'}
			</button>
			{btns.map(btn => btn)}
			<button disabled={currentPortion + 1 > allPortions} onClick={() => setCurrentPortion(prev => prev + 1)}>
				{'→'}
			</button>
		</div>
	)
}

export default Paginator
