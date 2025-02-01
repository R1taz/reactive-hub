import Header from '@/components/Header/Header'
import Navigation from '@/components/Navigation/Navigation'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
	return (
		<div className='container'>
			<Header />
			<hr />
			<Navigation />
			<Outlet />
		</div>
	)
}

export default MainLayout
