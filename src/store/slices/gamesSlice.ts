import { IGame } from '@/interfaces/gamesInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
	games: IGame[]
}

const initialState: State = {
	games: [],
}

const gamesSlice = createSlice({
	name: 'gamesSlice',
	initialState,
	reducers: {
		setGames(state, action: PayloadAction<IGame[]>) {
			state.games = action.payload
		},
	},
})

export default gamesSlice.reducer
export const { setGames } = gamesSlice.actions
