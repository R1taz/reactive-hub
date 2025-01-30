interface IRating {
	id: number
	title: string
	count: number
	percent: number
}

interface IAddedByStatus {
	yet: number
	owned: number
	beaten: number
	toplay: number
	dropped: number
	playing: number
}

interface IPlatform {
	platform: {
		id: 4
		name: string
		slug: string
		image: any | null
		year_end: any | null
		year_start: any | null
		games_count: number
		image_background: string
	}
	released_at: string
	requirements_en: {
		minimum: string
		recommended: string
	}
	requirements_ru: any | null
}

interface IParentPlatform {
	platform: {
		id: number
		name: string
		slug: string
	}
}

interface IGenre {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
}

interface IStore {
	id: number
	store: {
		id: number
		name: string
		slug: string
		domain: string
		games_count: number
		image_background: string
	}
}

interface ITage {
	id: number
	name: string
	slug: string
	language: string
	games_count: number
	image_background: string
}

interface IShortScreenshot {
	id: number
	image: string
}

export interface IGame {
	id: number
	slug: string
	name: string
	released: string
	tba: boolean
	background_image: string
	rating: number
	rating_top: number
	ratings: IRating[]
	ratings_count: number
	reviews_text_count: number
	added: number
	added_by_status: IAddedByStatus
	metacritic: number
	playtime: number
	suggestions_count: number
	updated: string
	user_game: any | null
	reviews_count: number
	saturated_color: string
	dominant_color: string
	platforms: IPlatform[]
	parent_platforms: IParentPlatform[]
	genres: IGenre[]
	stores: IStore[]
	clip: any | null
	tags: ITage[]
	esrb_rating: {
		id: number
		name: string
		slug: string
	}
	short_screenshots: IShortScreenshot[]
}
