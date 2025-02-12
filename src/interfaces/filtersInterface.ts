export interface IFilter {
	games: {}[]
	games_count: number
	id: number
	image: URL | null
	image_background: URL
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
