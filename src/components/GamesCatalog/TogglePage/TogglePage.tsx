import { useAppDispatch, useAppSelector } from '@/hooks/react-redux'
import styles from './styles.module.css'
import { setCurrentPage } from '@/store/slices/gamesSlice'

const TogglePage = () => {
	const current_page = useAppSelector(state => state.gamesSlice.current_page)
	const dispatch = useAppDispatch()

	return (
		<div className={styles.togglePage}>
			<button
				onClick={() => dispatch(setCurrentPage(current_page - 1))}
			>{`< Previous page`}</button>
			<button
				onClick={() => dispatch(setCurrentPage(current_page + 1))}
			>{`Next page >`}</button>
		</div>
	)
}

export default TogglePage
