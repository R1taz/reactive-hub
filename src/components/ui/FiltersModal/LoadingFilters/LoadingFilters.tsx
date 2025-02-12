import Loading from '../../Loading/Loading'
import ButtonClose from '../../ButtonClose/ButtonClose'

interface Props {
	closeModal: () => (value: React.SetStateAction<boolean>) => void
}

const LoadingFilters = ({ closeModal }: Props) => {
	return (
		<>
			<ButtonClose closeModal={closeModal} />
			<Loading />
		</>
	)
}

export default LoadingFilters
