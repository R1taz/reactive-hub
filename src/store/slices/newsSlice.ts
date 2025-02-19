import { INews, INewsCategories } from '@/interfaces/newsInterface'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
	news: INews[]
	categories: INewsCategories[]
	selectedCategory: INewsCategories
	keywords: string
	newsItemHeight: number
	current_page: number
	page_size: number
	scrollLeft: number
}

const initialState: State = {
	news: [],
	categories: ['all'],
	selectedCategory: 'all',
	keywords: '',
	newsItemHeight: 185,
	current_page: 1,
	page_size: 10,
	scrollLeft: 0,
}

const newsSlice = createSlice({
	name: 'newsSlice',
	initialState,
	reducers: {
		setNews(state, action: PayloadAction<INews[]>) {
			state.news.push(...action.payload)
		},
		setCategories(state, action: PayloadAction<INewsCategories[]>) {
			state.categories.push(...action.payload)
		},
		setSelectedCategory(state, action: PayloadAction<INewsCategories>) {
			state.selectedCategory = action.payload
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
		setScrollLeft(state, action: PayloadAction<number>) {
			state.scrollLeft = action.payload
		},
	},
})

export default newsSlice.reducer
export const {
	setNews,
	setCategories,
	setSelectedCategory,
	setKeywords,
	setCurrentPage,
	resetNews,
	setScrollLeft,
} = newsSlice.actions
