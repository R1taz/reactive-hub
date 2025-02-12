import styles from './styles.module.css'
import closeModalIMG from '../../../assets/icons8-закрыть-окно-50.png'

interface Props {
	closeModal: () => (value: React.SetStateAction<boolean>) => void
}

const ButtonClose = ({ closeModal }: Props) => {
	return (
		<button onClick={closeModal} className={styles.close}>
			<img src={closeModalIMG} />
		</button>
	)
}

export default ButtonClose
