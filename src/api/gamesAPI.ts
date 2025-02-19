import { ICurrentGame } from '@/interfaces/gamesInterface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const gamesAPI = createApi({
	reducerPath: 'gamesAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api' }),
	endpoints: builder => ({
		getGames: builder.query<any, any>({
			query: ({ page, page_size, search, activeFilters = {} }) => {
				const apiKey = import.meta.env.VITE_GAMES_API_KEY
				let queryActiveFilters = '&'

				for (let key of Object.keys(activeFilters)) {
					if (activeFilters[key].length) {
						const category = activeFilters[key]
						queryActiveFilters += `${key}=${category.join(', ')}`
						queryActiveFilters += '&'
					}
				}

				const query = `/games?key=${apiKey}&page=${page}&page_size=${page_size}&search=${search}&search_precise=true${queryActiveFilters}`

				return query
			},
			keepUnusedDataFor: 60,
		}),
		getGame: builder.query<ICurrentGame, string>({
			query: id => `/games/${id}?key=${import.meta.env.VITE_GAMES_API_KEY}`,
		}),
		getGameScreenshots: builder.query<any, string>({
			query: id =>
				`/games/${id}/screenshots?key=${import.meta.env.VITE_GAMES_API_KEY}`,
		}),
	}),
})

export default gamesAPI
export const { useGetGamesQuery, useGetGameQuery, useGetGameScreenshotsQuery } =
	gamesAPI
