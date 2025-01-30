import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const gamesAPI = createApi({
	reducerPath: 'gamesAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api' }),
	endpoints: builder => ({
		getGames: builder.query({
			query: () => `/games?key=${import.meta.env.VITE_API_KEY}`,
		}),
	}),
})

export default gamesAPI
export const { useGetGamesQuery } = gamesAPI
