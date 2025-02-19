import { INews } from '@/interfaces/newsInterface'
import styles from './styles.module.css'
import { forwardRef, Ref, useState } from 'react'
import notFoundPhoto from '../../../../assets/notFoundPhoto.jpg'
import { useAppSelector } from '@/hooks/react-redux'

interface Props {
	newsItem: INews
}

const NewsItem = forwardRef<HTMLDivElement, Props>(
	({ newsItem }: Props, ref: Ref<HTMLDivElement>) => {
		const newsItemHeight = useAppSelector(
			state => state.newsSlice.newsItemHeight
		)
		const [isError, setIsError] = useState(false)

		const handleError = () => {
			setIsError(true)
		}

		return (
			<div ref={ref} className={styles.item} style={{ height: newsItemHeight }}>
				<div className={styles.photoNews}>
					{newsItem.image !== 'None' && !isError && (
						<img src={newsItem.image} onError={handleError} />
					)}
					{(newsItem.image === 'None' || isError) && (
						<img src={notFoundPhoto} />
					)}
				</div>

				<div className={styles.newsContent}>
					<h3 className={styles.newsTitle}>{newsItem.title}</h3>
					<p>{newsItem.description}/</p>

					<div className={styles.metadata}>
						<span>{newsItem.author}</span>
						<span>{newsItem.published}</span>
					</div>
				</div>
			</div>
		)
	}
)

export default NewsItem
