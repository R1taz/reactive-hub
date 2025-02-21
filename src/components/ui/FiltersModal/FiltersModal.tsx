import { useAppSelector } from '@/hooks/react-redux'
import styles from './styles.module.css'
import { useState } from 'react'
import { IActiveFilters } from '@/interfaces/filtersInterface'
import ButtonApply from './ButtonApply/ButtonApply'
import LoadingFilters from './LoadingFilters/LoadingFilters'
import MainContentFilters from './MainContentFilters/MainContentFilters'
import ButtonClose from '../ButtonClose/ButtonClose'
import { getDataFilters } from '@/helpers/getDataFilters'

interface Props {
	closeModal: () => void
}

const FiltersModal = ({ closeModal }: Props) => {
	const { isFetching } = getDataFilters()

	const globalActiveFilters = useAppSelector(
		state => state.filtersSlice.activeFilters
	)
	const [activeFilters, setActiveFilters] = useState<IActiveFilters>({
		...globalActiveFilters,
	})

	return (
		<>
			<div className={styles.modal} style={{ height: isFetching ? 150 : '' }}>
				{isFetching && <LoadingFilters closeModal={closeModal} />}

				{!isFetching && (
					<>
						<ButtonClose closeModal={closeModal} />
						<MainContentFilters
							activeFilters={activeFilters}
							setActiveFilters={(activeFilters: IActiveFilters) =>
								setActiveFilters(activeFilters)
							}
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
