import { IGame } from '@/interfaces/gamesInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
	myGames: IGame[]
	gameItemHeight: number
	visibleGameItem: number
}

const initialState: State = {
	myGames: [],
	gameItemHeight: 231,
	visibleGameItem: 2,
}

const profileSlice = createSlice({
	name: 'profileSlice',
	initialState,
	reducers: {
		addToMyFavoriteGames(state, action: PayloadAction<IGame>) {
			state.myGames.push(action.payload)
		},
		removeToMyFavoriteGames(state, action: PayloadAction<number>) {
			state.myGames = state.myGames.filter(game => game.id !== action.payload)
		},
	},
})

export default profileSlice.reducer
export const { addToMyFavoriteGames, removeToMyFavoriteGames } =
	profileSlice.actions
