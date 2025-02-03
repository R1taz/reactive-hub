import { IGame } from '@/interfaces/gamesInterface'
import GameItem from '../../ui/GameItem/GameItem'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import {
	addToMyFavoriteGames,
	removeToMyFavoriteGames,
} from '@/store/slices/profileSlice'

interface Props {
	games: IGame[]
}

const GamesList = ({ games }: Props) => {
	const myFavoriteGames = useAppSelector(state => state.profileSlice.myGames)
	const dispatch = useAppDispatch()

	return (
		<>
			{games.length !== 0 &&
				games.map(game => (
					<GameItem
						game={game}
						isFavoriteGame={
							!!myFavoriteGames.find(myGame => myGame.id === game.id)
						}
						addToMyGames={(game: IGame) => dispatch(addToMyFavoriteGames(game))}
						removeToMyGames={(id: number) =>
							dispatch(removeToMyFavoriteGames(id))
						}
						key={game.id}
					/>
				))}
		</>
	)
}

export default GamesList
