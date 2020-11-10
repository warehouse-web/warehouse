import React from 'react'
import { useRouter } from 'next/router'

const CloseButton = ({ back = '/' }) => {
	const router = useRouter()

	const handleClick = () => {
		router.push(back)
	}
	return (
		<div
			className='CloseButton'
			onClick={() => {
				handleClick()
			}}
		>
			<span></span>
			<span></span>
		</div>
	)
}

export default CloseButton
