import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { useEffect } from 'react'

import Search from '@/components/ui/Search/Search'

import GamesCatalogPaginator from '@/components/GamesCatalog/GamesCaralogPaginator/GamesCatalogPaginator'
import GamesFilters from '@/components/GamesCatalog/GamesFilters/GamesFilters'
import GamesList from '@/components/GamesCatalog/GamesList/GamesList'

import { setGames, setTotalCount } from '@/store/slices/gamesSlice'
import { useGetGamesQuery } from '@/api/gamesAPI'

import styles from './styles.module.css'

const GamesCatalogPage = () => {
	const games = useAppSelector(state => state.gamesSlice.games)
	const current_page = useAppSelector(state => state.gamesSlice.current_page)
	const page_size = useAppSelector(state => state.gamesSlice.page_size)
	const keywords = useAppSelector(state => state.gamesSlice.keywords)
	const activeFilters = useAppSelector(
		state => state.filtersSlice.activeFilters
	)
	const dispatch = useAppDispatch()

	const { data, error, isLoading } = useGetGamesQuery({
		page: current_page,
		page_size: page_size,
		search: keywords,
		activeFilters: activeFilters,
	})

	useEffect(() => {
		if (data && JSON.stringify(data.results) !== JSON.stringify(games)) {
			dispatch(setGames(data.results))
			dispatch(setTotalCount(data.count))
		}
	}, [data, dispatch])

	if (isLoading) return <div>Loading...</div>
	if (error) return <div>Oops, error!!!</div>

	return (
		<>
			<div className={styles.blockSearchContent}>
				<GamesFilters />
				<Search chapter='games' />
			</div>

			<GamesCatalogPaginator />
			<GamesList games={games} />
		</>
	)
}

export default GamesCatalogPage
