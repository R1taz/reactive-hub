import { useRef } from 'react'
import styles from './styles.module.css'
import { useAppSelector } from '@/hooks/react-redux'
import {
	IActiveFilters,
	ICategoriesGamesFilters,
	IFilter,
} from '@/interfaces/filtersInterface'
import FiltersList from './FiltersList/FiltersList'
import useVirtualScrolling from '@/hooks/useVirtualScrolling'

interface Props {
	categoryTitle: ICategoriesGamesFilters
	filters: IFilter[]
	setActiveFilters: React.Dispatch<React.SetStateAction<IActiveFilters>>
	activeFilters: IActiveFilters
}

const Filters = ({
	categoryTitle,
	filters,
	setActiveFilters,
	activeFilters,
}: Props) => {
	const filterItemHeight = useAppSelector(
		state => state.filtersSlice.filterItemHeight
	)
	const visibleFilterItem = useAppSelector(
		state => state.filtersSlice.visibleFilterItem
	)
	const overscan = useAppSelector(state => state.filtersSlice.overscan)

	const virtualFiltersListRef = useRef<HTMLDivElement | null>(null)

	const { virtualItems, topDivHeight, bottomDivHeight } =
		useVirtualScrolling<IFilter>({
			items: filters,
			rowHeight: filterItemHeight,
			containerHeight: filterItemHeight * visibleFilterItem,
			scrollElementRef: virtualFiltersListRef,
			overscan: overscan,
		})

	return (
		<div className={styles.filters}>
			<h2>{categoryTitle[0].toUpperCase() + categoryTitle.slice(1)}</h2>

			<div
				ref={virtualFiltersListRef}
				style={{
					height: visibleFilterItem * filterItemHeight,
				}}
				className={styles.virtualFiltersList}
			>
				<div style={{ height: topDivHeight }}></div>
				<FiltersList
					containerHeight={visibleFilterItem * filterItemHeight}
					categoryTitle={categoryTitle}
					filters={virtualItems}
					setActiveFilters={setActiveFilters}
					activeFilters={activeFilters}
				/>
				<div style={{ height: bottomDivHeight }}></div>
			</div>
		</div>
	)
}

export default Filters
