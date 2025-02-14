import { useAppSelector } from '@/hooks/react-redux'
import styles from './styles.module.css'
import { useRef } from 'react'
import ProfileGamesList from './ProfileGamesList/ProfileGamesList'
import useVirtualScrolling from '@/hooks/useVirtualScrolling'
import { IGame } from '@/interfaces/gamesInterface'

const ProfileGames = () => {
	const myFavoriteGames = useAppSelector(state => state.profileSlice.myGames)
	const gameItemHeight = useAppSelector(
		state => state.profileSlice.gameItemHeight
	)
	const visibleGameItem = useAppSelector(
		state => state.profileSlice.visibleGameItem
	)

	const scrollElementRef = useRef<HTMLDivElement | null>(null)

	const { virtualItems, topDivHeight, bottomDivHeight } =
		useVirtualScrolling<IGame>({
			items: myFavoriteGames,
			rowHeight: gameItemHeight,
			containerHeight: gameItemHeight * visibleGameItem,
			scrollElementRef: scrollElementRef,
			overscan: 1,
		})

	return (
		<div
			ref={scrollElementRef}
			style={{
				height: visibleGameItem * gameItemHeight,
			}}
			className={styles.virtualGameList}
		>
			<div style={{ height: topDivHeight }}></div>
			<ProfileGamesList
				containerHeight={visibleGameItem * gameItemHeight}
				itemHeight={gameItemHeight}
				games={virtualItems}
			/>
			<div style={{ height: bottomDivHeight }}></div>
		</div>
	)
}

export default ProfileGames
