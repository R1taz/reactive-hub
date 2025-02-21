import styles from './styles.module.css'
import closeModalIMG from '../../../assets/closeOpen.png'

interface Props {
	closeModal: () => void
}

const ButtonClose = ({ closeModal }: Props) => {
	return (
		<button onClick={closeModal} className={styles.close}>
			<img src={closeModalIMG} />
		</button>
	)
}

export default ButtonClose
