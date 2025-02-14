import styles from './styles.module.css'

interface Props {
	titleList: string
	listItems: { [k in string]: { name: string } }[]
}

const ListItemsCarousel = ({ titleList, listItems }: Props) => {
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
									.filter(
										key => typeof item[key] === 'object' && item[key]?.name
									)
									.map(key => item[key].name)}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default ListItemsCarousel
