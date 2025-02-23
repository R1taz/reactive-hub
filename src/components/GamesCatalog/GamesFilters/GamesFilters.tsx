import { useState } from 'react'
import styles from './styles.module.css'
import FiltersModal from '@/components/ui/FiltersModal/FiltersModal'

const GamesFilters = () => {
	const [isOpen, setIsOpen] = useState(false)
	const body = document.querySelector('body')

	const handleChangeIsOpen = (toggleOpen: boolean) => {
		if (toggleOpen && body) body.classList.add('noScroll')
		if (!toggleOpen && body) body.classList.remove('noScroll')
		setIsOpen(toggleOpen)
	}

	return (
		<>
			<div
				onClick={() => handleChangeIsOpen(true)}
				className={styles.triggerModal}
			>
				Filters
			</div>

			{isOpen && <FiltersModal closeModal={() => handleChangeIsOpen(false)} />}
		</>
	)
}

export default GamesFilters
