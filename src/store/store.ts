import { configureStore } from '@reduxjs/toolkit'
import gamesSlice from './slices/gamesSlice'
import gamesAPI from '@/api/gamesAPI'

const store = configureStore({
	reducer: {
		gamesSlice,
		[gamesAPI.reducerPath]: gamesAPI.reducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gamesAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
