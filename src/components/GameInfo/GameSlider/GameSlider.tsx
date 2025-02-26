import { IShortScreenshot } from '@/interfaces/gamesInterface'
import styles from './styles.module.css'
import { useState } from 'react'
import nextArrowSVG from '../../../assets/next-arrow.svg'
import prevArrowSVG from '../../../assets/prev-arrow.svg'

interface Props {
	screenshots: IShortScreenshot[]
}

const GameSlider = ({ screenshots }: Props) => {
	const [currentScreen, setCurrentScreen] = useState(1)

	const handlePrevScreen = () => {
		setCurrentScreen(prev => (prev - 1 < 1 ? screenshots.length : prev - 1))
	}

	const handleNextScreen = () => {
		setCurrentScreen(prev => (prev + 1 > screenshots.length ? 1 : prev + 1))
	}

	return (
		<div className={styles.slider}>
			<img
				className={styles.screenshot}
				src={screenshots[currentScreen - 1].image}
				alt='game screenshot'
			/>

			<button className={styles.prev} onClick={handlePrevScreen}>
				<img src={prevArrowSVG} alt='prev-arrow' />
			</button>
			<button className={styles.next} onClick={handleNextScreen}>
				<img src={nextArrowSVG} alt='next-arrow' />
			</button>
			<div className={styles.ageLimit}>18+</div>
		</div>
	)
}

export default GameSlider
