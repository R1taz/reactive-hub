import { setActiveFilters } from '@/store/slices/filtersSlice'
import styles from './styles.module.css'
import { useAppDispatch } from '@/hooks/react-redux'
import { IActiveFilters } from '@/interfaces/filtersInterface'
import { setCurrentPage } from '@/store/slices/gamesSlice'

interface Props {
	closeModal: () => void
	activeFilters: IActiveFilters
}

const ButtonApply = ({ closeModal, activeFilters }: Props) => {
	const dispatch = useAppDispatch()
	return (
		<button
			className={styles.apply}
			onClick={() => {
				closeModal()
				dispatch(setActiveFilters(activeFilters))
				dispatch(setCurrentPage(1))
			}}
		>
			Apply filters
		</button>
	)
}

export default ButtonApply
