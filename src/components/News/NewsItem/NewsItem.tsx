import { INews } from '@/interfaces/newsInterface'
import styles from './styles.module.css'
import { forwardRef, Ref } from 'react'

interface Props {
	newsItem: INews
}

const NewsItem = forwardRef<HTMLDivElement, Props>(
	({ newsItem }: Props, ref: Ref<HTMLDivElement>) => {
		return (
			<div ref={ref} className={styles.item}>
				<div className={styles.image}>
					<img className={styles.imageNews} src={newsItem.image} />
				</div>

				<div className={styles.metadata}>
					<span>{newsItem.author}</span>
					{/* <span>{newsItem.published}</span> */}
				</div>

				<div className={styles.info}>
					<h3>{newsItem.title}</h3>
					<p>{newsItem.description}</p>
				</div>
			</div>
		)
	}
)

export default NewsItem
