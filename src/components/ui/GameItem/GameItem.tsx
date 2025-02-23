import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import { IGame } from '@/interfaces/gamesInterface'
import notFavoriteSVG from '../../../assets/favorite.png'
import favoriteSVG from '../../../assets/notFavorite.png'
import gameBackground from '../../../assets/gameBackground.jpg'

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
	const widthBody = document.querySelector('body')?.offsetWidth

	return (
		<div
			style={{
				height: widthBody! > 425 && widthBody! < 1024 ? gameItemHeight : '',
				background: `url(${gameBackground})`,
				backgroundSize: 'cover',
				backgroundPosition:
					widthBody! > 425 && widthBody! < 1024
						? 'left 25px bottom -30px'
						: widthBody! < 425
						? 'right -100px top 10px'
						: 'right -120px top 10px',
				backgroundRepeat: 'no-repeat',
			}}
			className={styles.gameItem}
		>
			<img
				src={game.background_image}
				style={{
					height: widthBody! > 425 && widthBody! < 1024 ? gameItemHeight : '',
				}}
			/>
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
	)
}

export default GameItem
