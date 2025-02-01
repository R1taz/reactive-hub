import { ReactNode } from 'react'
import styles from './styles.module.css'

interface Props {
	children: ReactNode
}

const FullWidthLine = ({ children }: Props) => {
	return (
		<div className={styles.fullWidthLine}>
			<div className={styles.children}>{children}</div>
		</div>
	)
}

export default FullWidthLine
