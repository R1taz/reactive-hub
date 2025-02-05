import { useGetNewsQuery } from '@/api/newsAPI'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { resetNews, setCurrentPage, setNews } from '@/store/slices/newsSlice'
import { useEffect, useMemo, useRef } from 'react'
import NewsItem from '../NewsItem/NewsItem'
import styles from './styles.module.css'

const NewsList = () => {
	const news = useAppSelector(state => state.newsSlice.news)
	const page_number = useAppSelector(state => state.newsSlice.current_page)
	const page_size = useAppSelector(state => state.newsSlice.page_size)
	const dispatch = useAppDispatch()

	const { data, isFetching } = useGetNewsQuery({ page_number, page_size })
	const lastNewsElementRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		return () => {
			dispatch(setCurrentPage(1))
			dispatch(resetNews())
		}
	}, [])

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
	}, [news.length])

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
			{isFetching && news.length === 0 && <h1>Loading...</h1>}
			<div id='news' className={styles.newsList}>
				{news.map((item, index) => (
					<NewsItem
						key={item.id}
						newsItem={item}
						ref={index + 1 === news.length ? lastNewsElementRef : null}
					/>
				))}
			</div>
			{isFetching && news.length !== 0 && <h1>Loading...</h1>}
		</>
	)
}

export default NewsList
