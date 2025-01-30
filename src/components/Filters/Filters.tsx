interface Props {
	title: string
	filters: {
		label: string
		value: string
	}[]
}

const Filters = ({ title, filters }: Props) => {
	const placeholder = `Select ${title}`

	return (
		<div>
			<label htmlFor=''>{title[0].toUpperCase() + title.slice(1)}</label>
			<select name='' id=''>
				<optgroup>
					<option value='' disabled selected>
						{placeholder}
					</option>
					{filters.map(filter => (
						<option key={filter.label} value={filter.value}>
							{filter.label}
						</option>
					))}
				</optgroup>
			</select>
		</div>
	)
}

export default Filters
