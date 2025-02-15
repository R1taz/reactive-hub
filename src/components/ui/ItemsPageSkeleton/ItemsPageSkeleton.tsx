import Skeleton from '../Skeleton/Skeleton'

const ItemsPageSkeleton = () => {
	return (
		<>
			<Skeleton count={1} type='search' />
			<Skeleton count={1} type='search' height={30} />
			<Skeleton count={20} type='item' />
		</>
	)
}

export default ItemsPageSkeleton
