import { ICurrentGame } from '@/interfaces/gamesInterface'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const gamesAPI = createApi({
	reducerPath: 'gamesAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api' }),
	endpoints: builder => ({
		getGames: builder.query<
			any,
			{ page: number; page_size: number; search: string }
		>({
			query: ({ page, page_size, search }) =>
				`/games?key=${
					import.meta.env.VITE_GAMES_API_KEY
				}&page=${page}&page_size=${page_size}&search=${search}&search_precise=true`,
		}),
		getGame: builder.query<ICurrentGame, number>({
			query: id => `/games/${id}?key=${import.meta.env.VITE_GAMES_API_KEY}`,
		}),
	}),
})

export default gamesAPI
export const { useGetGamesQuery, useGetGameQuery } = gamesAPI
