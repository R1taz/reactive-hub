import { RefObject, useLayoutEffect, useState } from 'react'
import { IFilter } from '@/interfaces/filtersInterface'

interface Props {
	containerHeight: number
	rowHeight: number
	scrollElementRef: RefObject<HTMLDivElement>
	items: IFilter[]
	overscan: number
}

const useVirtualScrolling = (props: Props) => {
	const { containerHeight, rowHeight, scrollElementRef, items, overscan } =
		props

	const [scrollTop, setScrollTop] = useState(0)

	useLayoutEffect(() => {
		const scrollElement = scrollElementRef.current
		if (!scrollElement) return

		const handleScroll = () => {
			const scrollTop = scrollElement.scrollTop
			setScrollTop(scrollTop)
		}

		handleScroll()

		scrollElement.addEventListener('scroll', handleScroll)
		return () => scrollElement.removeEventListener('scroll', handleScroll)
	}, [])

	const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan)
	const endIndex = Math.min(
		items.length * rowHeight,
		Math.ceil((scrollTop + containerHeight) / rowHeight + overscan)
	)

	const topDivHeight = startIndex * rowHeight
	const bottomDivHeight = (items.length - endIndex) * rowHeight

	const virtualItems = items.slice(startIndex, endIndex + 1)

	return {
		virtualItems,
		topDivHeight,
		bottomDivHeight,
		startIndex,
		endIndex,
	}
}

export default useVirtualScrolling
