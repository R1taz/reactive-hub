import { configureStore } from '@reduxjs/toolkit'
import gamesSlice from './slices/gamesSlice'
import profileSlice from './slices/profileSlice'
import newsSlice from './slices/newsSlice'
import filtersSlice from './slices/filtersSlice'
import gamesAPI from '@/api/gamesAPI'
import newsAPI from '@/api/newsAPI'
import filtersAPI from '@/api/filtersAPI'

const store = configureStore({
	reducer: {
		gamesSlice,
		profileSlice,
		newsSlice,
		filtersSlice,
		[gamesAPI.reducerPath]: gamesAPI.reducer,
		[newsAPI.reducerPath]: newsAPI.reducer,
		[filtersAPI.reducerPath]: filtersAPI.reducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat([
			gamesAPI.middleware,
			newsAPI.middleware,
			filtersAPI.middleware,
		]),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
