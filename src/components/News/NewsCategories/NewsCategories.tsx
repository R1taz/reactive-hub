import { useGetCategoriesQuery } from '@/api/newsAPI'
import styles from './styles.module.css'
import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import { setCategories, setSelectedCategory } from '@/store/slices/newsSlice'
import NewsCategory from './NewsCategory/NewsCategory'
import { INewsCategories } from '@/interfaces/newsInterface'
import ItemsPageSkeleton from '@/components/ui/ItemsPageSkeleton/ItemsPageSkeleton'

interface Props {
	selectedCategory: INewsCategories
}

const NewsCategories = ({ selectedCategory }: Props) => {
	const sliderRef = useRef<HTMLDivElement | null>(null)
	const categories = useAppSelector(state => state.newsSlice.categories)
	const dispatch = useAppDispatch()

	const { data, isLoading } = useGetCategoriesQuery('')

	useEffect(() => {
		if (data && categories.length <= 1) {
			dispatch(setCategories(data.categories))
		}
	}, [data, dispatch])

	const scrollLeft = () => {
		if (sliderRef.current) {
			const width = document.querySelector('body')?.offsetWidth!
			if (width < 425) sliderRef.current.scrollTop -= 150
			else sliderRef.current.scrollLeft -= 150
		}
	}

	const scrollRight = () => {
		if (sliderRef.current) {
			const width = document.querySelector('body')?.offsetWidth!
			if (width < 425) sliderRef.current.scrollTop += 150
			else sliderRef.current.scrollLeft += 150
		}
	}

	if (isLoading && categories.length <= 1) return <ItemsPageSkeleton />

	return (
		<div className={styles.carousel}>
			<button onClick={scrollLeft} className={styles.prev}>{`<`}</button>
			<div className={styles.content} ref={sliderRef}>
				{categories.map((category, index) => (
					<NewsCategory
						selectedCategory={selectedCategory}
						setSelectedCategory={(category: INewsCategories) =>
							dispatch(setSelectedCategory(category))
						}
						key={category + index}
						category={category}
					/>
				))}
			</div>
			<button onClick={scrollRight} className={styles.next}>{`>`}</button>
		</div>
	)
}

export default NewsCategories
