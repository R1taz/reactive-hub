import { INews } from '@/interfaces/newsInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
	news: INews[]
	keywords: string
	current_page: number
	page_size: number
}

const initialState: State = {
	news: [],
	keywords: '',
	current_page: 1,
	page_size: 10,
}

const newsSlice = createSlice({
	name: 'newsSlice',
	initialState,
	reducers: {
		setNews(state, action: PayloadAction<INews[]>) {
			state.news.push(...action.payload)
		},
		setKeywords(state, action: PayloadAction<string>) {
			state.keywords = action.payload
		},
		resetNews(state) {
			state.news = []
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.current_page = action.payload
		},
	},
})

export default newsSlice.reducer
export const { setNews, setKeywords, setCurrentPage, resetNews } =
	newsSlice.actions
