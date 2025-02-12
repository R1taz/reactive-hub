import { useState } from 'react'
import styles from './styles.module.css'
import FiltersModal from '@/components/ui/FiltersModal/FiltersModal'

const GamesFilters = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<div onClick={() => setOpen(true)} className={styles.triggerModal}>
				Filters
			</div>

			{open && <FiltersModal closeModal={() => setOpen(false)} />}
		</>
	)
}

export default GamesFilters
