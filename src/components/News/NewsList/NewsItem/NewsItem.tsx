import { INews } from '@/interfaces/newsInterface'
import styles from './styles.module.css'
import { forwardRef, Ref, useState } from 'react'
import notFoundPhoto from '../../../../assets/notFoundPhoto.jpg'
import { useAppSelector } from '@/hooks/react-redux'
import { convertDate } from '@/helpers/convertDate'

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

		const widthBody = document.querySelector('body')?.offsetWidth

		const date = convertDate(newsItem.published)

		return (
			<div
				ref={ref}
				className={styles.item}
				style={{
					height: widthBody! > 425 ? newsItemHeight : '',
				}}
			>
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
						<span>{date}</span>
					</div>
				</div>
			</div>
		)
	}
)

export default NewsItem
