import { useAppSelector } from '@/hooks/react-redux'
import styles from './styles.module.css'
import useGetDataFilters from '@/hooks/useGetDataFilters'
import { useState } from 'react'
import { IActiveFilters } from '@/interfaces/filtersInterface'
import ButtonApply from './ButtonApply/ButtonApply'
import LoadingFilters from './LoadingFilters/LoadingFilters'
import MainContentFilters from './MainContentFilters/MainContentFilters'
import ButtonClose from '../ButtonClose/ButtonClose'

interface Props {
	closeModal: (value: React.SetStateAction<boolean>) => void
}

const FiltersModal = ({ closeModal }: Props) => {
	const countFilters = useAppSelector(state => state.filtersSlice.countFilters)

	const allIsLoading = useGetDataFilters({ countFilters: countFilters })
	const globalActiveFilters = useAppSelector(
		state => state.filtersSlice.activeFilters
	)
	const [activeFilters, setActiveFilters] = useState<IActiveFilters>({
		...globalActiveFilters,
	})

	return (
		<>
			<div className={styles.modal}>
				{allIsLoading !== 0 && <LoadingFilters closeModal={closeModal} />}

				{allIsLoading === 0 && (
					<>
						<ButtonClose closeModal={closeModal} />
						<MainContentFilters
							activeFilters={activeFilters}
							setActiveFilters={setActiveFilters}
							closeModal={closeModal}
						/>
						<ButtonApply
							activeFilters={activeFilters}
							closeModal={closeModal}
						/>
					</>
				)}
			</div>
		</>
	)
}

export default FiltersModal
