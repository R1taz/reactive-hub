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
	setActiveFilters: React.Dispatch<React.SetStateAction<IActiveFilters>>
	activeFilters: IActiveFilters
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
			setActiveFilters(prev => ({
				...prev,
				[categoryTitle]: [...prev[categoryTitle], filter.id],
			}))
		}

		if (isActive) {
			setActiveFilters(prev => ({
				...prev,
				[categoryTitle]: prev[categoryTitle].filter(id => id !== filter.id),
			}))
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
