import {
	FiltersState,
	GetFiltersData,
	ResponseGetFilters,
} from '@/interfaces/filtersInterface'
import {
	createApi,
	fetchBaseQuery,
	FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react'

const filtersAPI = createApi({
	reducerPath: 'filtersAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api' }),
	endpoints: builder => ({
		getFilters: builder.query<ResponseGetFilters, void>({
			queryFn: async (_arg, { getState }, _extraOptions, baseQuery) => {
				try {
					const apiKey = import.meta.env.VITE_GAMES_API_KEY as string
					const categories = (getState() as FiltersState).filtersSlice
						.categoriesFilters

					const results = await Promise.all(
						categories.map(async category => {
							const result = await baseQuery(`/${category}?key=${apiKey}`)
							if (result.error) throw result.error
							return { category, data: result.data } as GetFiltersData
						})
					)

					return { data: results }
				} catch (error) {
					return { error: error as FetchBaseQueryError }
				}
			},
			keepUnusedDataFor: Infinity,
		}),
	}),
})

export default filtersAPI
export const { useGetFiltersQuery } = filtersAPI
