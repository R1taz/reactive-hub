import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import { useAppDispatch } from '@/hooks/react-redux'
import {
	setIdCurrentGame,
	setScreenshotCurrentGame,
} from '@/store/slices/gamesSlice'
import { IGame } from '@/interfaces/gamesInterface'
import notFavoriteSVG from '../../../assets/notFavorite.svg'
import favoriteSVG from '../../../assets/favorite.svg'

interface Props {
	game: IGame
	isFavoriteGame: boolean
	addToMyGames: (game: IGame) => void
	removeToMyGames: (id: number) => void
	gameItemHeight?: number
}

const GameItem = ({
	game,
	addToMyGames,
	removeToMyGames,
	isFavoriteGame,
	gameItemHeight,
}: Props) => {
	const dispatch = useAppDispatch()

	return (
		<div style={{ height: gameItemHeight + 'px' }} className={styles.gameItem}>
			<div>
				<img src={game.background_image} />
				<div className={styles.info}>
					<h3>{game.name}</h3>
					<p className={styles.italic}>Rating: {game.rating}</p>
					<p className={styles.italic}>Release date: {game.released}</p>

					<NavLink
						to={`/game`}
						onClick={() => {
							dispatch(setScreenshotCurrentGame(game.short_screenshots))
							dispatch(setIdCurrentGame(game.id))
						}}
					>
						Game Information {`→`}
					</NavLink>
				</div>

				{isFavoriteGame && (
					<img
						onClick={() => removeToMyGames(game.id)}
						className={styles.star}
						src={favoriteSVG}
					/>
				)}

				{!isFavoriteGame && (
					<img
						onClick={() => addToMyGames(game)}
						className={styles.star}
						src={notFavoriteSVG}
					/>
				)}
			</div>
		</div>
	)
}

export default GameItem
