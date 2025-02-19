import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const filtersAPI = createApi({
	reducerPath: 'filtersAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api' }),
	endpoints: builder => ({
		getFilters: builder.query({
			queryFn: async (_arg, { getState }, _extraOptions, baseQuery) => {
				try {
					const apiKey = import.meta.env.VITE_GAMES_API_KEY
					const state = getState()

					const results = []
					const categories = state.filtersSlice.categoriesFilters

					for (let i = 0; i < categories.length; i++) {
						const result = await baseQuery(`/${categories[i]}?key=${apiKey}`)
						results.push({ category: categories[i], data: result.data.results })
					}

					return Promise.resolve({ data: results })
				} catch (error) {
					return Promise.reject({ error: error })
				}
			},
			keepUnusedDataFor: Infinity,
		}),
	}),
})

export default filtersAPI
export const { useGetFiltersQuery } = filtersAPI
