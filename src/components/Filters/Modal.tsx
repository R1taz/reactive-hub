import Filters from './Filters'
import { useState } from 'react'
import styles from './styles.module.css'

const platforms = {
	items: [
		{ label: 'PC', value: 'pc' },
		{ label: 'PS 5', value: 'ps5' },
		{ label: 'PS 4', value: 'ps4' },
		{ label: 'PS 3', value: 'ps3' },
	],
}

const stores = {
	items: [
		{ label: 'Steam', value: 'steam' },
		{ label: 'Epic Games', value: 'epicGames' },
		{ label: 'Google Play', value: 'googlePlay' },
		{ label: 'Origin', value: 'origin' },
	],
}

const tags = {
	items: [
		{ label: 'Multiplayer', value: 'multiplayer' },
		{ label: 'Singleplayer', value: 'singleplayer' },
		{ label: 'RPG', value: 'rpg' },
		{ label: 'Atmospheric', value: 'atmospheric' },
	],
}

const ModalFilters = () => {
	const [open, setOpen] = useState(false)

	return (
		<>
			<div onClick={() => setOpen(prev => !prev)} className={styles.triggerModal}>
				Filters
			</div>

			{open && (
				<div>
					<Filters title='platforms' filters={platforms.items} />
					<Filters title='stores' filters={stores.items} />
					<Filters title='tags' filters={tags.items} />
				</div>
			)}
		</>
	)
}

export default ModalFilters
