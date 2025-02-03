import GameItem from '@/components/ui/GameItem/GameItem'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { IGame } from '@/interfaces/gamesInterface'
import {
	addToMyFavoriteGames,
	removeToMyFavoriteGames,
} from '@/store/slices/profileSlice'

interface Props {
	start: number
}

const ProfileGamesList = ({ start }: Props) => {
	const myFavoriteGames = useAppSelector(state => state.profileSlice.myGames)
	const gameItemHeight = useAppSelector(
		state => state.profileSlice.gameItemHeight
	)
	const visibleGameItem = useAppSelector(
		state => state.profileSlice.visibleGameItem
	)
	const dispatch = useAppDispatch()

	return (
		<div>
			{myFavoriteGames.slice(start, start + visibleGameItem + 1).map(game => (
				<GameItem
					gameItemHeight={gameItemHeight}
					game={game}
					addToMyGames={(game: IGame) => dispatch(addToMyFavoriteGames(game))}
					removeToMyGames={(id: number) =>
						dispatch(removeToMyFavoriteGames(id))
					}
					isFavoriteGame={
						!!myFavoriteGames.find(myGame => myGame.id === game.id)
					}
					key={game.id}
				/>
			))}
		</div>
	)
}

export default ProfileGamesList
