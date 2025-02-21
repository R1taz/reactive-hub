import {
	RequestGetNews,
	ResponseGetNews,
	ResponseGetCategoriesNews,
} from '@/interfaces/newsInterface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const newsAPI = createApi({
	reducerPath: 'newsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.currentsapi.services/v1',
	}),
	endpoints: builder => ({
		getNews: builder.query<ResponseGetNews, RequestGetNews>({
			query: ({ page_number, page_size, keywords, category }) =>
				`/search?apiKey=${
					import.meta.env.VITE_NEWS_API_KEY
				}&page_number=${page_number}&page_size=${page_size}&keywords=${keywords}&category=${category}`,
		}),
		getCategories: builder.query<ResponseGetCategoriesNews, ''>({
			query: () =>
				`/available/categories?apiKey=${import.meta.env.VITE_NEWS_API_KEY}`,
		}),
	}),
})

export default newsAPI
export const { useGetNewsQuery, useGetCategoriesQuery } = newsAPI
