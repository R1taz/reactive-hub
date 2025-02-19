import { RefObject, useLayoutEffect, useState } from 'react'

interface Props<T> {
	containerHeight: number
	rowHeight: number
	scrollElementRef: RefObject<HTMLDivElement>
	items: T[]
	overscan: number
}

const useVirtualScrolling = <T>({
	containerHeight,
	rowHeight,
	items,
	scrollElementRef,
	overscan,
}: Props<T>) => {
	const [scrollTop, setScrollTop] = useState(0)

	useLayoutEffect(() => {
		const scrollElement = scrollElementRef.current

		if (!scrollElement) return

		const handleScroll = () => {
			setScrollTop(scrollElement.scrollTop)
		}

		handleScroll()

		scrollElement.addEventListener('scroll', handleScroll)
		return () => scrollElement.removeEventListener('scroll', handleScroll)
	}, [])

	const startIndex = Math.max(0, Math.floor(scrollTop / rowHeight) - overscan)
	const endIndex = Math.min(
		items.length * rowHeight,
		Math.ceil((scrollTop + containerHeight) / rowHeight) + overscan
	)

	const topDivHeight = startIndex * rowHeight
	const bottomDivHeight = Math.max(0, (items.length - endIndex) * rowHeight)

	const virtualItems = items.slice(startIndex, endIndex + 1)

	return {
		virtualItems,
		topDivHeight,
		bottomDivHeight,
	}
}

export default useVirtualScrolling
