import { useGetGameQuery, useGetGameScreenshotsQuery } from '@/api/gamesAPI'
import DescriptionGame from '@/components/GameInfo/DescriptionGame/DescriptionGame'
import GameDevelopers from '@/components/GameInfo/GameDevelopers/GameDevelopers'
import GameInfoHeader from '@/components/GameInfo/GameInfoHeader/GameInfoHeader'
import GameKeywords from '@/components/GameInfo/GameKeywords/GameKeywords'
import GameRelease from '@/components/GameInfo/GameRelease/GameRelease'
import GameSlider from '@/components/GameInfo/GameSlider/GameSlider'
import LinkToWebsite from '@/components/GameInfo/LinkToWebsite/LinkToWebsite'
import FullWidthLine from '@/components/ui/FullWidthLine/FullWidthLine'
import ListItemsCarousel from '@/components/ui/ListitemsCarousel/ListItemsCarousel'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import {
	setIdCurrentGame,
	setInfoCurrentGame,
	setScreenshotCurrentGame,
} from '@/store/slices/gamesSlice'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.css'
import Loading from '@/components/ui/Loading/Loading'

const GamePage = () => {
	const current_game = useAppSelector(state => state.gamesSlice.current_game)
	const dispatch = useAppDispatch()

	const { id } = useParams()
	const { data: dataGame, isFetching: isFetchingGame } = useGetGameQuery(id!)
	const { data: dataScreenshots, isFetching: isFetchingScreenshots } =
		useGetGameScreenshotsQuery(id!)

	useEffect(() => {
		if (
			dataScreenshots &&
			JSON.stringify(dataScreenshots.results) !==
				JSON.stringify(current_game.screenshots)
		) {
			dispatch(setScreenshotCurrentGame(dataScreenshots.results))
		}
	}, [dataScreenshots])

	useEffect(() => {
		if (
			dataGame &&
			JSON.stringify(dataGame) !== JSON.stringify(current_game.info)
		) {
			dispatch(setInfoCurrentGame(dataGame))
			dispatch(setIdCurrentGame(dataGame.id!))
		}
	}, [dataGame])

	if (
		!current_game.screenshots.length ||
		!current_game.id_game ||
		isFetchingGame ||
		isFetchingScreenshots
	) {
		return <Loading />
	}

	return (
		<div className={styles.game}>
			<GameInfoHeader gameName={current_game.info.name} />
			<GameSlider screenshots={current_game.screenshots} />
			<GameDevelopers
				developers={current_game.info.developers}
				publishers={current_game.info.publishers}
			/>
			<GameRelease
				updated={current_game.info.updated}
				released={current_game.info.released}
				isReleased={!current_game.info.tba}
			/>
			<ListItemsCarousel
				titleList='Platforms'
				listItems={current_game.info.platforms}
			/>
			<ListItemsCarousel
				titleList='Stores'
				listItems={current_game.info.stores}
			/>
			<GameKeywords
				genres={current_game.info.genres}
				tags={current_game.info.tags}
				achievements={current_game.info.achievements_count}
				mainAchievements={current_game.info.parent_achievements_count}
			/>
			<FullWidthLine>
				<span style={{ fontStyle: 'italic' }}>
					Average game time: {current_game.info.playtime}
				</span>
			</FullWidthLine>
			<DescriptionGame description={current_game.info.description_raw} />
			<LinkToWebsite link={current_game.info.website} />
		</div>
	)
}

export default GamePage
