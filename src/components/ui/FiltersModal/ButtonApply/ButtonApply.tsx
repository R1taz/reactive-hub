import { setActiveFilters } from '@/store/slices/filtersSlice'
import styles from './styles.module.css'
import { useAppDispatch } from '@/hooks/react-redux'
import { IActiveFilters } from '@/interfaces/filtersInterface'
import { useNavigate } from 'react-router-dom'
import { setCurrentPage } from '@/store/slices/gamesSlice'

interface Props {
	closeModal: () => (value: React.SetStateAction<true>) => void
	activeFilters: IActiveFilters
}

const ButtonApply = ({ closeModal, activeFilters }: Props) => {
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	return (
		<button
			className={styles.apply}
			onClick={() => {
				closeModal()
				dispatch(setActiveFilters(activeFilters))
				dispatch(setCurrentPage(1))
				navigate('/games')
			}}
		>
			Apply filters
		</button>
	)
}

export default ButtonApply
