import { CommonParamsInCurrentGame } from '@/interfaces/gamesInterface'
import styles from './styles.module.css'

interface Props {
	genres: CommonParamsInCurrentGame[]
	tags: (CommonParamsInCurrentGame & { language: string })[]
	achievements: number
	mainAchievements: number
}

const GameKeywords = ({
	genres,
	tags,
	achievements,
	mainAchievements,
}: Props) => {
	return (
		<div className={styles.gamesKeywords}>
			<h3 className={styles.titleGenres}>Genres</h3>
			<div className={styles.genres}>
				<ul>
					{genres.map(genre => (
						<li key={genre.id}>{genre.name}</li>
					))}
				</ul>
			</div>

			<h3 className={styles.titleTags}>Tags</h3>
			<div className={styles.tags}>
				<ul>
					{tags.map(tag => (
						<li key={tag.id}>{tag.name}</li>
					))}
				</ul>
			</div>

			<div className={styles.achievements}>
				<h3>Achievements</h3>
				<p>All count: {achievements}</p>
				<p>Main count: {mainAchievements}</p>
			</div>
		</div>
	)
}

export default GameKeywords
