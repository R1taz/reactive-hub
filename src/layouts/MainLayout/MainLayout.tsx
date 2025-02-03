import Header from '@/components/Header/Header'
import Navigation from '@/components/Navigation/Navigation'
import FullWidthLine from '@/components/ui/FullWidthLine/FullWidthLine'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
	return (
		<div className='container'>
			<Header />
			<FullWidthLine colorLine='#0078f0' />
			<Navigation />
			<Outlet />
		</div>
	)
}

export default MainLayout
