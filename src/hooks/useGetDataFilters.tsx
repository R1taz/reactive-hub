import {
	useGetDevelopersQuery,
	useGetGenresQuery,
	useGetPlatformsQuery,
	useGetPublishersQuery,
	useGetStoresQuery,
	useGetTagsQuery,
} from '@/api/filtersAPI'
import {
	setDevelopers,
	setGenres,
	setPlatforms,
	setPublishers,
	setStores,
	setTags,
} from '@/store/slices/filtersSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

interface IParams {
	countFilters: number
}

const useGetDataFilters = ({ countFilters }: IParams) => {
	const [loadingCount, setLoadingCount] = useState(countFilters)

	const dispatch = useDispatch()

	const { data: dataStores } = useGetStoresQuery('')
	const { data: dataGenres } = useGetGenresQuery('')
	const { data: dataTags } = useGetTagsQuery('')
	const { data: dataPlatforms } = useGetPlatformsQuery('')
	const { data: dataDevelopers } = useGetDevelopersQuery('')
	const { data: dataPublishers } = useGetPublishersQuery('')

	useEffect(() => {
		if (dataStores) {
			dispatch(setStores(dataStores.results))
			setLoadingCount(prev => prev - 1)
		}
	}, [dataStores])

	useEffect(() => {
		if (dataGenres) {
			dispatch(setGenres(dataGenres.results))
			setLoadingCount(prev => prev - 1)
		}
	}, [dataGenres])

	useEffect(() => {
		if (dataTags) {
			dispatch(setTags(dataTags.results))
			setLoadingCount(prev => prev - 1)
		}
	}, [dataTags])

	useEffect(() => {
		if (dataPlatforms) {
			dispatch(setPlatforms(dataPlatforms.results))
			setLoadingCount(prev => prev - 1)
		}
	}, [dataPlatforms])

	useEffect(() => {
		if (dataDevelopers) {
			dispatch(setDevelopers(dataDevelopers.results))
			setLoadingCount(prev => prev - 1)
		}
	}, [dataDevelopers])

	useEffect(() => {
		if (dataPublishers) {
			dispatch(setPublishers(dataPublishers.results))
			setLoadingCount(prev => prev - 1)
		}
	}, [dataPublishers])

	return loadingCount
}

export default useGetDataFilters
