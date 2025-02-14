import styles from './styles.module.css'

interface Props {
	description: string
}

const DescriptionGame = ({ description }: Props) => {
	return (
		<div className={styles.description}>
			<h2>Description</h2>
			<p>{description}</p>
		</div>
	)
}

export default DescriptionGame
