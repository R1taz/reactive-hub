import { useAppSelector } from '@/hooks/react-redux'
import Filter from './Filter/Filter'
import {
	IActiveFilters,
	ICategoriesGamesFilters,
	IFilter,
} from '@/interfaces/filtersInterface'
import styles from './styles.module.css'

interface Props {
	filters: IFilter[]
	containerHeight: number
	categoryTitle: ICategoriesGamesFilters
	setActiveFilters: React.Dispatch<React.SetStateAction<IActiveFilters>>
	activeFilters: IActiveFilters
}

const FiltersList = ({
	containerHeight,
	filters,
	categoryTitle,
	setActiveFilters,
	activeFilters,
}: Props) => {
	const filterItemHeight = useAppSelector(
		state => state.filtersSlice.filterItemHeight
	)

	return (
		<div style={{ height: containerHeight }} className={styles.filtersList}>
			{filters.map(filter => (
				<Filter
					categoryTitle={categoryTitle}
					key={filter.id}
					height={filterItemHeight}
					filter={filter}
					activeFilters={activeFilters}
					setActiveFilters={setActiveFilters}
				/>
			))}
		</div>
	)
}

export default FiltersList
