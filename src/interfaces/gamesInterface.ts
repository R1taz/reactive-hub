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

interface ITage {
	id: number
	name: string
	slug: string
	language: string
	games_count: number
	image_background: string
}

export interface IShortScreenshot {
	id: number
	image: string
}

export interface IPlatform {
	platform: {
		id: number
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

export interface IStore {
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

export interface CommonParamsInCurrentGame {
	id: number
	name: string
	slug: string
	games_count: number
	image_background: string
}

export interface ICurrentGame {
	id: number | null
	slug: string
	name: string
	name_original: string
	description: string
	metacritic: number
	metacritic_platforms: {
		metascore: number
		url: string
		platform: {
			platform: number
			name: string
			slug: string
		}
	}[]
	released: string
	tba: boolean
	updated: string
	background_image: string
	background_image_additional: string
	website: string
	rating: number
	rating_top: number
	ratings: {
		id: number
		title: string
		count: number
		percent: number
	}[]
	reactions: {
		[K in string]: number
	}[]
	added: number
	added_by_status: {
		yet: number
		owned: number
		beaten: number
		toplay: number
		dropped: number
		playing: number
	}
	playtime: number
	screenshots_count: number
	movies_count: number
	creators_count: number
	achievements_count: number
	parent_achievements_count: number
	reddit_url: string
	reddit_name: string
	reddit_description: string
	reddit_logo: string
	reddit_count: number
	twitch_count: string
	youtube_count: string
	reviews_text_count: string
	ratings_count: number
	suggestions_count: number
	alternative_names: string[]
	metacritic_url: string
	parents_count: number
	additions_count: number
	game_series_count: number
	parent_platforms: {
		platform: {
			id: number
			name: string
			slug: string
		}
	}[]
	platforms: IPlatform[]
	stores: IStore[]
	developers: CommonParamsInCurrentGame[]
	genres: CommonParamsInCurrentGame[]
	tags: (CommonParamsInCurrentGame & { language: string })[]
	publishers: CommonParamsInCurrentGame[]
	esrb_rating: {
		id: number
		slug: string
		name: string
	}
	clip: string | null
	description_raw: string
}
