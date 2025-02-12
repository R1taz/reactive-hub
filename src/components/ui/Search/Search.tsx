import { useAppDispatch } from '@/hooks/react-redux'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { useDebounce } from '@/hooks/useDebounce'

interface Props {
	chapter: string
	keywords: string
	setCurrentPage: (page: number) => void
	setKeywords: (keywords: string) => void
	resetContentItems?: () => void
}

const Search = ({
	chapter,
	keywords,
	setCurrentPage,
	setKeywords,
	resetContentItems,
}: Props) => {
	const dispatch = useAppDispatch()
	const [searchValue, setSearchValue] = useState(keywords)
	const debouncedValue = useDebounce(searchValue, 500)
	const placeholder = `Search ${chapter}`

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = event => {
		setSearchValue(event.target.value)
	}

	useEffect(() => {
		if (keywords === debouncedValue) return
		setKeywords(debouncedValue)
		setCurrentPage(1)
		if (resetContentItems) resetContentItems()
	}, [debouncedValue, dispatch])

	return (
		<input
			type='text'
			value={searchValue}
			onChange={handleChange}
			className={styles.search}
			placeholder={placeholder}
		/>
	)
}

export default Search
