import { configureStore } from '@reduxjs/toolkit'
import gamesSlice from './slices/gamesSlice'

const store = configureStore({
	reducer: {
		gamesSlice,
	},
})

export default store
