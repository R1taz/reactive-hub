import ModalFilters from '@/components/GamesCatalog/Filters/Modal'
import Search from '@/components/ui/Search/Search'
import styles from './styles.module.css'
import GamesCatalogPaginator from '@/components/GamesCatalog/GamesCaralogPaginator/GamesCatalogPaginator'
import GamesList from '@/components/GamesCatalog/GamesList/GamesList'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { useEffect } from 'react'
import { setGames, setTotalCount } from '@/store/slices/gamesSlice'
import { useGetGamesQuery } from '@/api/gamesAPI'

const GamesCatalogPage = () => {
	const games = useAppSelector(state => state.gamesSlice.games)
	const dispatch = useAppDispatch()
	const current_page = useAppSelector(state => state.gamesSlice.current_page)
	const page_size = useAppSelector(state => state.gamesSlice.page_size)

	const { data, error, isLoading } = useGetGamesQuery({
		page: current_page,
		page_size: page_size,
	})

	useEffect(() => {
		if (data && JSON.stringify(data.results) !== JSON.stringify(games)) {
			dispatch(setGames(data.results))
			dispatch(setTotalCount(data.count))
		}
	}, [data, dispatch])

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (error) {
		return <div>Oops, error!!!</div>
	}

	return (
		<>
			<div className={styles.blockSearchContent}>
				<ModalFilters />
				<Search chapter='games' />
			</div>

			<GamesCatalogPaginator />
			<GamesList games={games} />
		</>
	)
}

export default GamesCatalogPage
