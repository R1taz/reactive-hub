import Paginator from '@/components/ui/Paginator/Paginator'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { setCurrentPage, setIsLoadingPage } from '@/store/slices/gamesSlice'

const GamesCatalogPaginator = () => {
	const total_count = useAppSelector(state => state.gamesSlice.total_count)
	const current_page = useAppSelector(state => state.gamesSlice.current_page)
	const page_size = useAppSelector(state => state.gamesSlice.page_size)
	const portion_size = useAppSelector(state => state.gamesSlice.portion_size)
	const dispatch = useAppDispatch()

	return (
		<Paginator
			total_count={total_count}
			current_page={current_page}
			page_size={page_size}
			portion_size={portion_size}
			setPage={page => {
				dispatch(setIsLoadingPage())
				dispatch(setCurrentPage(page))
			}}
		/>
	)
}

export default GamesCatalogPaginator
