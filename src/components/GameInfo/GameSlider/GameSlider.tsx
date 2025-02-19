import { IShortScreenshot } from '@/interfaces/gamesInterface'
import styles from './styles.module.css'
import { useState } from 'react'
import nextArrowSVG from '../../../assets/next-arrow.svg'
import prevArrowSVG from '../../../assets/prev-arrow.svg'
import Loading from '@/components/ui/Loading/Loading'

interface Props {
	screenshots: IShortScreenshot[]
}

const GameSlider = ({ screenshots }: Props) => {
	const [currentScreen, setCurrentScreen] = useState(1)
	const [isLoadingScreenshot, setIsLoadingScreenshot] = useState(true)

	const handlePrevScreen = () => {
		setCurrentScreen(prev => (prev - 1 < 1 ? screenshots.length : prev - 1))
		setIsLoadingScreenshot(true)
	}

	const handleNextScreen = () => {
		setCurrentScreen(prev => (prev + 1 > screenshots.length ? 1 : prev + 1))
		setIsLoadingScreenshot(true)
	}

	return (
		<div className={styles.slider}>
			<div className={styles.divScreenshot}>
				{isLoadingScreenshot && (
					<Loading top={50} bottom={50} left={50} right={50} />
				)}
				<img
					className={styles.screenshot}
					src={screenshots[currentScreen - 1].image}
					alt='game screenshot'
					onLoad={() => setIsLoadingScreenshot(false)}
				/>
			</div>

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
