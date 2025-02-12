import {
	RequestGetApiNews,
	ResponseGetApiNews,
} from '@/interfaces/newsInterface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const newsAPI = createApi({
	reducerPath: 'newsAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.currentsapi.services/v1/search',
	}),
	endpoints: builder => ({
		getNews: builder.query<ResponseGetApiNews, RequestGetApiNews>({
			query: ({ page_number, page_size, keywords }) =>
				`?apiKey=${
					import.meta.env.VITE_NEWS_API_KEY
				}&page_number=${page_number}&page_size=${page_size}&keywords=${keywords}`,
		}),
	}),
})

export default newsAPI
export const { useGetNewsQuery } = newsAPI
