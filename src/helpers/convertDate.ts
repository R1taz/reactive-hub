export function convertDate(date: string): string {
	let currentMonth = ''

	if (new Date(date).getMonth() === 0) currentMonth = 'January'
	if (new Date(date).getMonth() === 1) currentMonth = 'February'
	if (new Date(date).getMonth() === 2) currentMonth = 'March'
	if (new Date(date).getMonth() === 3) currentMonth = 'April'
	if (new Date(date).getMonth() === 4) currentMonth = 'May'
	if (new Date(date).getMonth() === 5) currentMonth = 'June'
	if (new Date(date).getMonth() === 6) currentMonth = 'July'
	if (new Date(date).getMonth() === 7) currentMonth = 'August'
	if (new Date(date).getMonth() === 8) currentMonth = 'September'
	if (new Date(date).getMonth() === 9) currentMonth = 'October'
	if (new Date(date).getMonth() === 10) currentMonth = 'November'
	if (new Date(date).getMonth() === 11) currentMonth = 'December'

	return `${new Date(date).getDate()} ${currentMonth} ${new Date(
		date
	).getFullYear()}`
}
