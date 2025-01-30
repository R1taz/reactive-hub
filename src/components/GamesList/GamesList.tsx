import { useGetGamesQuery } from '@/api/gamesAPI'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { setGames } from '@/store/slices/gamesSlice'
import GameItem from '../GameItem/GameItem'
import { useEffect } from 'react'

const GamesList = () => {
	const games = useAppSelector(state => state.gamesSlice.games)
	const dispatch = useAppDispatch()
	const { data, error, isLoading } = useGetGamesQuery('')

	useEffect(() => {
		if (data && JSON.stringify(data.results) !== JSON.stringify(games)) {
			dispatch(setGames(data.results))
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
			{games.length !== 0 &&
				games.map(game => (
					<GameItem
						srcImgGame={game.background_image}
						key={game.id}
						nameGame={game.name}
						rating={game.rating}
						release={game.released}
					/>
				))}
		</>
	)
}

export default GamesList
