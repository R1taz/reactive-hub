export interface IFilter {
	games: any[]
	games_count: number
	id: number
	image: string | null
	image_background: string
	name: string
	slug: string
	year_end: number | null
	year_start: number | null
}

export type ICategoriesGamesFilters =
	| 'platforms'
	| 'stores'
	| 'developers'
	| 'publishers'
	| 'genres'
	| 'tags'

export interface IActiveFilters {
	platforms: number[]
	stores: number[]
	developers: number[]
	publishers: number[]
	genres: number[]
	tags: number[]
}

export type PayloadActionSetFilters = {
	category: ICategoriesGamesFilters
	data: any
}[]

export interface FiltersState {
	filtersSlice: {
		categoriesFilters: string[]
	}
}

export type ResponseGetFilters = GetFiltersData[] | GetFiltersError

export interface GetFiltersData {
	category: ICategoriesGamesFilters
	data: { results: IFilter[] }
}
export interface GetFiltersError {
	error: {
		status: string
		message: string
	}
}
