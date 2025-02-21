import {
	IActiveFilters,
	ICategoriesGamesFilters,
} from '@/interfaces/filtersInterface'
import styles from './styles.module.css'
import { useState } from 'react'

interface Props {
	filter: { name: string; id: number }
	height: number
	categoryTitle: ICategoriesGamesFilters
	activeFilters: IActiveFilters
	setActiveFilters: (activeFilters: IActiveFilters) => void
}

const Filter = ({
	filter,
	height,
	categoryTitle,
	activeFilters,
	setActiveFilters,
}: Props) => {
	const [isActive, setIsActive] = useState(
		!!activeFilters[categoryTitle].find(item => item === filter.id)
	)

	const handleClick = () => {
		if (!isActive) {
			const newActiveFilters = {
				...activeFilters,
				[categoryTitle]: [...activeFilters[categoryTitle], filter.id],
			}

			setActiveFilters(newActiveFilters)
		}

		if (isActive) {
			const newActiveFilters = {
				...activeFilters,
				[categoryTitle]: activeFilters[categoryTitle].filter(
					id => id !== filter.id
				),
			}

			setActiveFilters(newActiveFilters)
		}

		setIsActive(prev => !prev)
	}

	return (
		<div
			onClick={handleClick}
			className={`${styles.filter} ${isActive ? styles.active : ''}`}
			style={{ height }}
		>
			<span>{filter.name}</span>
		</div>
	)
}

export default Filter
