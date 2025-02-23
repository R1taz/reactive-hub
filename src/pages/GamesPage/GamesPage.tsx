import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { useEffect } from 'react'

import Search from '@/components/ui/Search/Search'

import GamesCatalogPaginator from '@/components/GamesCatalog/GamesCaralogPaginator/GamesCatalogPaginator'
import GamesFilters from '@/components/GamesCatalog/GamesFilters/GamesFilters'
import GamesList from '@/components/GamesCatalog/GamesList/GamesList'

import {
	setCurrentPage,
	setGames,
	setKeywords,
	setTotalCount,
} from '@/store/slices/gamesSlice'
import { useGetGamesQuery } from '@/api/gamesAPI'

import styles from './styles.module.css'
import ItemsPageSkeleton from '@/components/ui/ItemsPageSkeleton/ItemsPageSkeleton'
import TogglePage from '@/components/GamesCatalog/TogglePage/TogglePage'

const GamesPage = () => {
	const games = useAppSelector(state => state.gamesSlice.games)
	const current_page = useAppSelector(state => state.gamesSlice.current_page)
	const page_size = useAppSelector(state => state.gamesSlice.page_size)
	const keywords = useAppSelector(state => state.gamesSlice.keywords)
	const activeFilters = useAppSelector(
		state => state.filtersSlice.activeFilters
	)
	const dispatch = useAppDispatch()

	const widthBody = document.querySelector('body')?.offsetWidth

	const { data, error, isLoading } = useGetGamesQuery({
		page: current_page,
		page_size: widthBody! < 768 ? page_size : page_size * 2 + 1,
		search: keywords,
		activeFilters: activeFilters,
	})

	useEffect(() => {
		if (data && JSON.stringify(data.results) !== JSON.stringify(games)) {
			dispatch(setGames(data.results))
			dispatch(setTotalCount(data.count))
		}
	}, [data, dispatch])

	if (isLoading) return <ItemsPageSkeleton />
	if (error) return <div>Oops, error!!!</div>

	return (
		<>
			<div className={styles.blockSearchContent}>
				<GamesFilters />
				<div className={styles.search}>
					<Search
						chapter='games'
						keywords={keywords}
						setCurrentPage={page => dispatch(setCurrentPage(page))}
						setKeywords={keywords => dispatch(setKeywords(keywords))}
					/>
				</div>
			</div>

			<GamesCatalogPaginator />
			<GamesList games={games} />
			<TogglePage />
		</>
	)
}

export default GamesPage
