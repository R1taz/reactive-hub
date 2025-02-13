import { INewsCategories } from '@/interfaces/newsInterface'
import styles from './styles.module.css'
import { useAppDispatch } from '@/hooks/react-redux'
import { resetNews, setCurrentPage } from '@/store/slices/newsSlice'

interface Props {
	category: INewsCategories
	selectedCategory: INewsCategories
	setSelectedCategory: (category: INewsCategories) => void
}

const NewsCategory = ({
	category,
	selectedCategory,
	setSelectedCategory,
}: Props) => {
	const isActive = selectedCategory === category ? true : false
	const dispatch = useAppDispatch()

	return (
		<div
			onClick={() => {
				if (isActive) return
				setSelectedCategory(category)
				dispatch(setCurrentPage(1))
				dispatch(resetNews())
			}}
			className={`${styles.category} ${isActive ? styles.active : ''}`}
		>
			<span>{category[0].toUpperCase() + category.slice(1)}</span>
		</div>
	)
}

export default NewsCategory
