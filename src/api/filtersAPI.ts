import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const filtersAPI = createApi({
	reducerPath: 'filtersAPI',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.rawg.io/api' }),
	endpoints: builder => ({
		getPlatforms: builder.query({
			query: () => '/platforms?key=bf8f07ef04b64d7da5e26cda6aa38d27',
			keepUnusedDataFor: 0,
		}),
		getStores: builder.query({
			query: () => '/stores?key=bf8f07ef04b64d7da5e26cda6aa38d27',
			keepUnusedDataFor: 0,
		}),
		getDevelopers: builder.query({
			query: () => '/developers?key=bf8f07ef04b64d7da5e26cda6aa38d27',
			keepUnusedDataFor: 0,
		}),
		getPublishers: builder.query({
			query: () => '/publishers?key=bf8f07ef04b64d7da5e26cda6aa38d27',
			keepUnusedDataFor: 0,
		}),
		getGenres: builder.query({
			query: () => '/genres?key=bf8f07ef04b64d7da5e26cda6aa38d27',
			keepUnusedDataFor: 0,
		}),
		getTags: builder.query({
			query: () => '/tags?key=bf8f07ef04b64d7da5e26cda6aa38d27',
			keepUnusedDataFor: 0,
		}),
	}),
})

export default filtersAPI
export const {
	useGetPlatformsQuery,
	useGetStoresQuery,
	useGetDevelopersQuery,
	useGetPublishersQuery,
	useGetGenresQuery,
	useGetTagsQuery,
} = filtersAPI
