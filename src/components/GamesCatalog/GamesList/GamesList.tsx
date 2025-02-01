import { IGame } from '@/interfaces/gamesInterface'
import GameItem from '../GameItem/GameItem'

interface Props {
	games: IGame[]
}

const GamesList = ({ games }: Props) => {
	return (
		<>
			{games.length !== 0 &&
				games.map(game => (
					<GameItem
						srcImgGame={game.background_image}
						key={game.id}
						id={game.id}
						screenshots={game.short_screenshots}
						nameGame={game.name}
						rating={game.rating}
						release={game.released}
					/>
				))}
		</>
	)
}

export default GamesList
