import ModalFilters from './components/Filters/Modal'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Navigation from './components/Navigation/Navigation'
import Paginator from './components/Paginator/Paginator'
import GamesList from './components/GamesList/GamesList'

function App() {
	return (
		<div className='container'>
			<Header />
			<hr />
			<Navigation />
			<div
				style={{
					display: 'flex',
					margin: '20px 0px',
					justifyContent: 'space-between',
					alignItems: 'stretch',
				}}
			>
				<ModalFilters />
				<Search chapter='games' />
			</div>

			<Paginator />
			<GamesList />
		</div>
	)
}

export default App
