import {
	ICurrentGame,
	IGame,
	IShortScreenshot,
} from '@/interfaces/gamesInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
	games: IGame[]
	myGames: IGame[]
	visibleGameItem: number
	gameItemHeight: number
	overscan: number
	isLoadingPage: boolean
	current_page: number
	page_size: number
	portion_size: number
	total_count: number
	keywords: string
	current_game: {
		id_game: number | null
		screenshots: IShortScreenshot[]
		info: ICurrentGame
	}
}

const initialState: State = {
	games: [],
	myGames: [],
	visibleGameItem: 3,
	gameItemHeight: 185,
	overscan: 2,
	isLoadingPage: false,
	current_page: 1,
	page_size: 10,
	portion_size: 5,
	total_count: 0,
	keywords: '',
	current_game: {
		id_game: null,
		screenshots: [],
		info: {
			id: null,
			slug: '',
			name: '',
			name_original: '',
			description: '',
			metacritic: 0,
			metacritic_platforms: [],
			released: '',
			tba: false,
			updated: '',
			background_image: '',
			background_image_additional: '',
			website: '',
			rating: 0,
			rating_top: 0,
			ratings: [],
			reactions: [],
			added: 0,
			added_by_status: {
				yet: 0,
				owned: 0,
				beaten: 0,
				toplay: 0,
				dropped: 0,
				playing: 0,
			},
			playtime: 0,
			screenshots_count: 0,
			movies_count: 0,
			creators_count: 0,
			achievements_count: 0,
			parent_achievements_count: 0,
			reddit_url: '',
			reddit_name: '',
			reddit_description: '',
			reddit_logo: '',
			reddit_count: 0,
			twitch_count: '',
			youtube_count: '',
			reviews_text_count: '',
			ratings_count: 0,
			suggestions_count: 0,
			alternative_names: [],
			metacritic_url: '',
			parents_count: 0,
			additions_count: 0,
			game_series_count: 0,
			parent_platforms: [],
			platforms: [],
			stores: [],
			developers: [],
			genres: [],
			tags: [],
			publishers: [],
			esrb_rating: {
				id: 0,
				slug: '',
				name: '',
			},
			clip: null,
			description_raw: '',
		},
	},
}

const gamesSlice = createSlice({
	name: 'gamesSlice',
	initialState,
	reducers: {
		setGames(state, action: PayloadAction<IGame[]>) {
			state.games = action.payload
			state.isLoadingPage = false
		},
		setIsLoadingPage(state) {
			state.isLoadingPage = true
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.current_page = action.payload
		},
		setTotalCount(state, action: PayloadAction<number>) {
			state.total_count = action.payload
		},
		setScreenshotCurrentGame(state, action: PayloadAction<IShortScreenshot[]>) {
			state.current_game.screenshots = action.payload
		},
		setIdCurrentGame(state, action: PayloadAction<number>) {
			state.current_game.id_game = action.payload
		},
		setInfoCurrentGame(state, action: PayloadAction<ICurrentGame>) {
			state.current_game.info = action.payload
		},
		setKeywords(state, action: PayloadAction<string>) {
			state.keywords = action.payload
		},
		addToMyFavoriteGames(state, action: PayloadAction<IGame>) {
			state.myGames.push(action.payload)
		},
		removeToMyFavoriteGames(state, action: PayloadAction<number>) {
			state.myGames = state.myGames.filter(game => game.id !== action.payload)
		},
	},
})

export default gamesSlice.reducer
export const {
	setGames,
	setIsLoadingPage,
	setCurrentPage,
	setTotalCount,
	setScreenshotCurrentGame,
	setIdCurrentGame,
	setInfoCurrentGame,
	setKeywords,
	addToMyFavoriteGames,
	removeToMyFavoriteGames,
} = gamesSlice.actions
