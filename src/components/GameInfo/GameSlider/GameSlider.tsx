import { IShortScreenshot } from '@/interfaces/gamesInterface'
import styles from './styles.module.css'
import { useState } from 'react'
import nextArrowSVG from '../../../assets/next-arrow.svg'
import prevArrowSVG from '../../../assets/prev-arrow.svg'

interface Props {
	screenshots: IShortScreenshot[]
}

const GameSlider = ({ screenshots }: Props) => {
	const [currentScreen, setCurrentScreen] = useState(2)

	const handlePrevScreen = () => {
		if (currentScreen - 1 <= 1) {
			setCurrentScreen(screenshots.length)
		} else {
			setCurrentScreen(prev => prev - 1)
		}
	}

	const handleNextScreen = () => {
		if (currentScreen + 1 > screenshots.length) {
			setCurrentScreen(2)
		} else {
			setCurrentScreen(prev => prev + 1)
		}
	}

	return (
		<div className={styles.slider}>
			<img src={screenshots[currentScreen - 1].image} alt='game screenhot' />
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
