import styles from './styles.module.css'

interface Props {
	chapter: string
}

const Search = ({ chapter }: Props) => {
	const placeholder = `Search ${chapter}`

	return <input type='text' className={styles.search} placeholder={placeholder} />
}

export default Search
