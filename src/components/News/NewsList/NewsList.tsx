import { INews } from '@/interfaces/newsInterface'
import NewsItem from './NewsItem/NewsItem'
import styles from './styles.module.css'

interface Props {
	news: INews[]
	lastNewsElementRef: React.MutableRefObject<HTMLDivElement | null>
}

const NewsList = ({ news, lastNewsElementRef }: Props) => {
	return (
		<div id='news' className={styles.newsList}>
			{news.map((item, index) => (
				<NewsItem
					key={item.id}
					newsItem={item}
					ref={index + 1 === news.length ? lastNewsElementRef : null}
				/>
			))}
		</div>
	)
}

export default NewsList
