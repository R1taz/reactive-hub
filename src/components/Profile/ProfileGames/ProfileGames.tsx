import { useAppSelector } from '@/hooks/react-redux'
import styles from './styles.module.css'
import { useRef } from 'react'
import ProfileGamesList from './ProfileGamesList/ProfileGamesList'
import useVirtualScrolling from '@/hooks/useVirtualScrolling'
import { IGame } from '@/interfaces/gamesInterface'

const ProfileGames = () => {
	const myFavoriteGames = useAppSelector(state => state.gamesSlice.myGames)
	const gameItemHeight = useAppSelector(
		state => state.gamesSlice.gameItemHeight
	)
	const visibleGameItem = useAppSelector(
		state => state.gamesSlice.visibleGameItem
	)
	const overscan = useAppSelector(state => state.gamesSlice.overscan)

	const scrollElementRef = useRef<HTMLDivElement | null>(null)

	const { virtualItems, topDivHeight, bottomDivHeight } =
		useVirtualScrolling<IGame>({
			items: myFavoriteGames,
			rowHeight: gameItemHeight,
			containerHeight: gameItemHeight * visibleGameItem,
			scrollElementRef: scrollElementRef,
			overscan: overscan,
		})

	return (
		<div
			ref={scrollElementRef}
			style={{
				height: visibleGameItem * gameItemHeight + 50,
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
