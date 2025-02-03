import { configureStore } from '@reduxjs/toolkit'
import gamesSlice from './slices/gamesSlice'
import profileSlice from './slices/profileSlice'
import gamesAPI from '@/api/gamesAPI'

const store = configureStore({
	reducer: {
		gamesSlice,
		profileSlice,
		[gamesAPI.reducerPath]: gamesAPI.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(gamesAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
