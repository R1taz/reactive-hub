import { useGetGameQuery } from '@/api/gamesAPI'
import GameDevelopers from '@/components/GameInfo/GameDevelopers/GameDevelopers'
import GameInfoHeader from '@/components/GameInfo/GameInfoHeader/GameInfoHeader'
import GameKeywords from '@/components/GameInfo/GameKeywords/GameKeywords'
import GameRelease from '@/components/GameInfo/GameRelease/GameRelease'
import GameSlider from '@/components/GameInfo/GameSlider/GameSlider'
import FullWidthLine from '@/components/ui/FullWidthLine/FullWidthLine'
import ListItemsCarousel from '@/components/ui/ListitemsCarousel/ListItemsCarousel'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { setInfoCurrentGame } from '@/store/slices/gamesSlice'
import { useEffect } from 'react'

const GameInfoPage = () => {
	const current_game = useAppSelector(state => state.gamesSlice.current_game)
	const dispatch = useAppDispatch()

	/* const { id } = useParams() */

	/* if (!current_game.id_game) {
		dispatch(setIdCurrentGame(+id!))
	} */

	const { data, error, isLoading } = useGetGameQuery(
		current_game.id_game as number
	)

	if (isLoading || !current_game.info.id) return <h1>Loading...</h1>

	useEffect(() => {
		if (data && JSON.stringify(data) !== JSON.stringify(current_game.info)) {
			dispatch(setInfoCurrentGame(data))
		}
	}, [data])

	return (
		<div>
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
		</div>
	)
}

export default GameInfoPage
