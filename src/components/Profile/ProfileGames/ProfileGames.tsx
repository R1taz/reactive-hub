import { useAppSelector } from '@/hooks/react-redux'
import styles from './styles.module.css'
import { useRef, useState } from 'react'
import ProfileGamesList from './ProfileGamesList/ProfileGamesList'

const ProfileGames = () => {
	const myFavoriteGames = useAppSelector(state => state.profileSlice.myGames)
	const gameItemHeight = useAppSelector(
		state => state.profileSlice.gameItemHeight
	)
	const visibleGameItem = useAppSelector(
		state => state.profileSlice.visibleGameItem
	)

	const scrollElementRef = useRef<HTMLDivElement | null>(null)
	const [start, setStart] = useState(0)

	const onScroll: React.UIEventHandler<HTMLDivElement> = e => {
		setStart(Math.floor(e.currentTarget.scrollTop / gameItemHeight))
	}
	const getTopHeight = () => gameItemHeight * start
	const getBottomHeight = () => {
		return gameItemHeight * (myFavoriteGames.length - (start + visibleGameItem))
	}

	return (
		<div
			style={{ height: (gameItemHeight + 10) * visibleGameItem }}
			className={styles.scrollElement}
			ref={scrollElementRef}
			onScroll={onScroll}
		>
			<div style={{ height: getTopHeight() }}></div>
			<ProfileGamesList start={start} />
			<div style={{ height: getBottomHeight() }}></div>
		</div>
	)
}

export default ProfileGames
