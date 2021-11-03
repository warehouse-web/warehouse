import { useState, useEffect, useRef } from 'react'
import { useAnimationFrame } from '_utils'

const MagicLogo = ({ logoImg = false }) => {
	const refMain = useRef(false)
	const refContainer = useRef(false)
	const [img, setImg] = useState(false)

	useEffect(() => {
		if (!logoImg) {
			setImg(false)
		}
	}, [logoImg])

	const onLoadImg = (state) => {
		setImg(refContainer.current.src)
	}

	useAnimationFrame(() => {
		scroll()
	})

	// Scrolling
	const scroll = () => {
		if (!refMain.current) return false
		let shiftRatio = 0
		let initFlexWidthPx = 0

		if (window.innerWidth <= 900) {
			shiftRatio = 0.00025
			initFlexWidthPx = 310
		} else {
			initFlexWidthPx = 620
			shiftRatio = 0.0005
		}

		const y = window.scrollY

		let newWidth = initFlexWidthPx - 0.3 * y
		if (newWidth < 120) {
			newWidth *= -1
		}

		refMain.current.style.width = newWidth + 'px'
	}

	const styles =
		img && logoImg && logoImg.image
			? {
					backgroundImage: `url(${img})`,
			  }
			: {}

	return (
		<div
			className={'MagicLogo ' + (img && logoImg ? '' : 'not-active')}
			style={styles}
			ref={refMain}
		>
			<div className='MagicLogo__img'>
				{logoImg && logoImg.image ? (
					<img src={logoImg.image} ref={refContainer} onLoad={onLoadImg} />
				) : (
					''
				)}
			</div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle rectangle-background'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
			<div className='rectangle'></div>
		</div>
	)
}

export default MagicLogo
