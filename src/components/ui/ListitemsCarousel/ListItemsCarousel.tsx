import { TypesListItemsCarousel } from '@/interfaces/gamesInterface'
import styles from './styles.module.css'

interface Props<T> {
	titleList: string
	listItems: T[]
}

const ListItemsCarousel = <T extends TypesListItemsCarousel>({
	titleList,
	listItems,
}: Props<T>) => {
	if (!listItems.length) return <div></div>

	return (
		<div className={styles.listItems}>
			<h2 className={styles.title}>{titleList}</h2>

			<div className={styles.carousel}>
				<div>
					{listItems.map((item, index) => (
						<div key={index} className={styles.item}>
							<span>
								{Object.keys(item)
									.map(key => {
										const itemKey = key as keyof T
										const value = item[itemKey]
										if (typeof value === 'object' && value && 'name' in value) {
											return value.name
										} else {
											return null
										}
									})
									.filter((name): name is string => name !== null)}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ListItemsCarousel
