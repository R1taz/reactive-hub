import { IGame } from '@/interfaces/gamesInterface'
import GameItem from '../../ui/GameItem/GameItem'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import {
	addToMyFavoriteGames,
	removeToMyFavoriteGames,
} from '@/store/slices/gamesSlice'
import styles from './styles.module.css'

interface Props {
	games: IGame[]
}

const GamesList = ({ games }: Props) => {
	const myFavoriteGames = useAppSelector(state => state.gamesSlice.myGames)
	const gameItemHeight = useAppSelector(
		state => state.gamesSlice.gameItemHeight
	)
	const dispatch = useAppDispatch()

	return (
		<>
			{games.length !== 0 && (
				<div className={styles.gamesList}>
					{games.map(game => (
						<GameItem
							game={game}
							isFavoriteGame={
								!!myFavoriteGames.find(myGame => myGame.id === game.id)
							}
							addToMyGames={(game: IGame) => {
								dispatch(addToMyFavoriteGames(game))
							}}
							removeToMyGames={(id: number) => {
								dispatch(removeToMyFavoriteGames(id))
							}}
							gameItemHeight={gameItemHeight}
							key={game.id}
						/>
					))}
				</div>
			)}
		</>
	)
}

export default GamesList
