import GameItem from '@/components/ui/GameItem/GameItem'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { IGame } from '@/interfaces/gamesInterface'
import {
	addToMyFavoriteGames,
	removeToMyFavoriteGames,
} from '@/store/slices/profileSlice'
import styles from './styles.module.css'

interface Props {
	games: IGame[]
	containerHeight: number
	itemHeight: number
}

const ProfileGamesList = ({ games, containerHeight, itemHeight }: Props) => {
	const myFavoriteGames = useAppSelector(state => state.profileSlice.myGames)
	const dispatch = useAppDispatch()

	return (
		<div style={{ height: containerHeight }} className={styles.gamesList}>
			{games.map(game => (
				<GameItem
					gameItemHeight={itemHeight}
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
