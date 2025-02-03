import { ReactNode } from 'react'
import styles from './styles.module.css'

interface Props {
	children?: ReactNode
	colorLine?: string
}

const FullWidthLine = ({ children, colorLine }: Props) => {
	return (
		<div style={{ borderColor: colorLine }} className={styles.fullWidthLine}>
			<div className={styles.children}>{children}</div>
		</div>
	)
}

export default FullWidthLine
