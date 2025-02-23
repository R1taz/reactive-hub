import { NavLinkRenderProps } from 'react-router-dom'

export function checkIsActiveLink(props: NavLinkRenderProps) {
	return props.isActive ? true : false
}
