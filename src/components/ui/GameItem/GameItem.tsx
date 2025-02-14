import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import { IGame } from '@/interfaces/gamesInterface'
import notFavoriteSVG from '../../../assets/notFavorite.svg'
import favoriteSVG from '../../../assets/favorite.svg'

interface Props {
	game: IGame
	isFavoriteGame: boolean
	addToMyGames: (game: IGame) => void
	removeToMyGames: (id: number) => void
	gameItemHeight: number
}

const GameItem = ({
	game,
	addToMyGames,
	removeToMyGames,
	isFavoriteGame,
	gameItemHeight,
}: Props) => {
	return (
		<div style={{ height: gameItemHeight }} className={styles.gameItem}>
			<div>
				<img src={game.background_image} style={{ height: gameItemHeight }} />
				<div className={styles.info}>
					<h3>{game.name}</h3>
					<p>Rating: {game.rating}</p>
					<p>Release date: {game.released}</p>

					<NavLink to={`/games/${game.id}`}>Game Information {`→`}</NavLink>
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
