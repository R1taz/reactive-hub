import { NavLink } from 'react-router-dom'
import styles from './styles.module.css'
import { useAppDispatch } from '@/hooks/react-redux'
import {
	setIdCurrentGame,
	setScreenshotCurrentGame,
} from '@/store/slices/gamesSlice'
import { IShortScreenshot } from '@/interfaces/gamesInterface'

interface Props {
	srcImgGame: string
	src?: string
	nameGame: string
	rating: number
	release: string
	id: number
	screenshots: IShortScreenshot[]
}

const GameItem = ({
	id,
	screenshots,
	srcImgGame,
	nameGame,
	rating,
	release,
}: Props) => {
	const dispatch = useAppDispatch()

	return (
		<div className={styles.gameItem}>
			<div>
				<img src={srcImgGame} />
				<div className={styles.info}>
					<h3>{nameGame}</h3>
					<p className={styles.italic}>Rating: {rating}</p>
					<p className={styles.italic}>Release date: {release}</p>
					<NavLink
						to={`/game`}
						onClick={() => {
							dispatch(setScreenshotCurrentGame(screenshots))
							dispatch(setIdCurrentGame(id))
						}}
					>
						Game Information {`→`}
					</NavLink>
				</div>
			</div>
		</div>
	)
}

export default GameItem
