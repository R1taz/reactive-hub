import { IActiveFilters } from '@/interfaces/filtersInterface'
import { useAppSelector } from '@/hooks/react-redux'
import Filters from './Filters/Filters'

interface Props {
	activeFilters: IActiveFilters
	setActiveFilters: (activeFilters: IActiveFilters) => void
}

const MainContentFilters = ({ activeFilters, setActiveFilters }: Props) => {
	const filters = useAppSelector(state => state.filtersSlice)

	return (
		<>
			<h1>Filters</h1>
			<div>
				{filters.categoriesFilters.map(category => {
					return (
						<Filters
							key={category}
							categoryTitle={category}
							filters={filters[category]}
							activeFilters={activeFilters}
							setActiveFilters={setActiveFilters}
						/>
					)
				})}
			</div>
		</>
	)
}

export default MainContentFilters
