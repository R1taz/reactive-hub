import NewsList from '@/components/News/NewsList/NewsList'
import styles from './styles.module.css'
import { useEffect, useMemo, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { useGetNewsQuery } from '@/api/newsAPI'
import { resetNews, setNews } from '@/store/slices/newsSlice'
import Search from '@/components/ui/Search/Search'
import { setCurrentPage, setKeywords } from '@/store/slices/newsSlice'
import NewsCategories from '@/components/News/NewsCategories/NewsCategories'

const NewsPage = () => {
	const news = useAppSelector(state => state.newsSlice.news)
	const page_number = useAppSelector(state => state.newsSlice.current_page)
	const page_size = useAppSelector(state => state.newsSlice.page_size)
	const keywords = useAppSelector(state => state.newsSlice.keywords)
	const category = useAppSelector(state => state.newsSlice.selectedCategory)
	const dispatch = useAppDispatch()

	const { data, isFetching } = useGetNewsQuery({
		page_number,
		page_size,
		keywords,
		category,
	})
	const lastNewsElementRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		return () => {
			dispatch(setCurrentPage(1))
			dispatch(resetNews())
		}
	}, [dispatch])

	const lastElemObserver = useMemo(() => {
		return new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					dispatch(setCurrentPage(page_number + 1))
					if (lastNewsElementRef.current) {
						observer.unobserve(lastNewsElementRef.current)
					}
				}
			})
		})
	}, [dispatch, page_number])

	useEffect(() => {
		if (!news.length) return
		if (lastNewsElementRef.current) {
			lastElemObserver.observe(lastNewsElementRef.current)
		}

		return () => {
			if (lastNewsElementRef.current) {
				lastElemObserver.unobserve(lastNewsElementRef.current)
			}
		}
	}, [news.length, dispatch])

	useEffect(() => {
		if (data) {
			if (!news.length) {
				dispatch(setNews(data.news))
				return
			}

			const newNews = data.news.filter(dataNewsItem => {
				if (!news.filter(newsItem => newsItem.id === dataNewsItem.id).length)
					return dataNewsItem
			})

			if (!newNews.length) dispatch(setCurrentPage(page_number + 1))
			if (newNews.length) dispatch(setNews(newNews))
		}
	}, [data, dispatch])

	return (
		<>
			<NewsCategories selectedCategory={category} />
			<div className={styles.search}>
				<Search
					chapter='news'
					keywords={keywords}
					setCurrentPage={page => dispatch(setCurrentPage(page))}
					setKeywords={keywords => dispatch(setKeywords(keywords))}
					resetContentItems={() => dispatch(resetNews())}
				/>
			</div>
			{isFetching && news.length === 0 && <h1>Loading...</h1>}
			<NewsList news={news} lastNewsElementRef={lastNewsElementRef} />
			{isFetching && news.length !== 0 && <h1>Loading...</h1>}
		</>
	)
}

export default NewsPage
