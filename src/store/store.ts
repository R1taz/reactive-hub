import { configureStore } from '@reduxjs/toolkit'
import gamesSlice from './slices/gamesSlice'
import profileSlice from './slices/profileSlice'
import newsSlice from './slices/newsSlice'
import gamesAPI from '@/api/gamesAPI'
import newsAPI from '@/api/newsAPI'

const store = configureStore({
	reducer: {
		gamesSlice,
		profileSlice,
		newsSlice,
		[gamesAPI.reducerPath]: gamesAPI.reducer,
		[newsAPI.reducerPath]: newsAPI.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([gamesAPI.middleware, newsAPI.middleware]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
