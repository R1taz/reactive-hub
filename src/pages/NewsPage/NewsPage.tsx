import NewsList from '@/components/News/NewsList/NewsList'
import styles from './styles.module.css'

const NewsPage = () => {
	return (
		<div className={styles.news}>
			<NewsList />
		</div>
	)
}

export default NewsPage
