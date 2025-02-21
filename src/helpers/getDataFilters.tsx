import { useGetFiltersQuery } from '@/api/filtersAPI'
import { GetFiltersData } from '@/interfaces/filtersInterface'
import { setFilters } from '@/store/slices/filtersSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export function getDataFilters() {
	const dispatch = useDispatch()
	const { data, isFetching } = useGetFiltersQuery()

	useEffect(() => {
		if (data) {
			dispatch(setFilters(data as GetFiltersData[]))
		}
	}, [data])

	return { isFetching }
}
