import {
	IActiveFilters,
	ICategoriesGamesFilters,
	IFilter,
	PayloadActionSetFilters,
} from '@/interfaces/filtersInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
	categoriesFilters: ICategoriesGamesFilters[]
	filterItemHeight: number
	visibleFilterItem: number
	countFilters: number
	overscan: number
	platforms: IFilter[]
	stores: IFilter[]
	developers: IFilter[]
	publishers: IFilter[]
	genres: IFilter[]
	tags: IFilter[]
	activeFilters: IActiveFilters
}

const initialState: State = {
	categoriesFilters: [
		'platforms',
		'stores',
		'developers',
		'publishers',
		'genres',
		'tags',
	],
	platforms: [],
	stores: [],
	developers: [],
	publishers: [],
	genres: [],
	tags: [],
	activeFilters: {
		platforms: [],
		stores: [],
		developers: [],
		publishers: [],
		genres: [],
		tags: [],
	},
	filterItemHeight: 30,
	visibleFilterItem: 5,
	countFilters: 6,
	overscan: 2,
}

const filtersSlice = createSlice({
	name: 'filtersSlice',
	initialState,
	reducers: {
		setActiveFilters(state, action: PayloadAction<IActiveFilters>) {
			state.activeFilters = action.payload
		},
		setFilters(state, action: PayloadAction<PayloadActionSetFilters>) {
			for (let i = 0; i < action.payload.length; i++) {
				state[action.payload[i].category] = action.payload[i].data.results
			}
		},
	},
})

export default filtersSlice.reducer
export const { setActiveFilters, setFilters } = filtersSlice.actions
