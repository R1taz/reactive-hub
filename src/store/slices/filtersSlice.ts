import {
	IActiveFilters,
	ICategoriesGamesFilters,
	IFilter,
} from '@/interfaces/filtersInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
	categoriesFilters: ICategoriesGamesFilters[]
	filterItemHeight: number
	visibleFilterItem: number
	countFilters: number
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
	visibleFilterItem: 4,
	countFilters: 6,
}

const filtersSlice = createSlice({
	name: 'filtersSlice',
	initialState,
	reducers: {
		setActiveFilters(state, action: PayloadAction<IActiveFilters>) {
			state.activeFilters = action.payload
		},
		setPlatforms(state, action) {
			state.platforms = action.payload
		},
		setStores(state, action) {
			state.stores = action.payload
		},
		setDevelopers(state, action) {
			state.developers = action.payload
		},
		setPublishers(state, action) {
			state.publishers = action.payload
		},
		setGenres(state, action) {
			state.genres = action.payload
		},
		setTags(state, action) {
			state.tags = action.payload
		},
	},
})

export default filtersSlice.reducer
export const {
	setPlatforms,
	setStores,
	setDevelopers,
	setPublishers,
	setGenres,
	setTags,
	setActiveFilters,
} = filtersSlice.actions
