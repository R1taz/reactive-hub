import ModalFilters from './components/Filters/Modal'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import Navigation from './components/Navigation/Navigation'
import Paginator from './components/Paginator/Paginator'
import GameItem from './components/GameItem/GameItem'

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
			<GameItem nameGame='Grand Theft Auto Vice City' developers='Rockstar Games' release={2013} />
			<GameItem nameGame='Mafia II' developers='2K Czech' release={2010} />
			<GameItem nameGame='Need For Speed Most Wanted' developers='EA Canada' release={2005} />
		</div>
	)
}

export default App
