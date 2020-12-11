import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Image = (props) => {
	const [inViewRef, inView] = useInView({
		triggerOnce: true,
		rootMargin: '0px 0px',
	})
	const [isLoaded, setLoaded] = useState(0)
	const { src, width, height, ratio, srcSet, sizes, alt, fullBleed, preload = false } = props

	// When an image is in the browser cache or is completed loading before react rehydration,
	// the `onload` may not be triggered. In order to ensure we have the correct "complete"
	// state, check the `complete` property after mounting
	const imgRef = React.createRef()

	useEffect(() => {
		if (imgRef && imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth) {
			setLoaded(true)
		}
	}, [imgRef])

	return (
		<div
			className={
				(isLoaded ? 'image is-loaded' : 'image') + (fullBleed ? ' image--fullBleed' : '')
			}
			ref={inViewRef}
			style={{
				paddingBottom: `${(fullBleed ? 0 : ratio ? ratio : height / width) * 100}%`,
			}}
		>
			{(preload || inView) &&
				(srcSet ? (
					<img
						ref={imgRef}
						alt={alt}
						className={'image__src'}
						onLoad={() => setLoaded(true)}
						srcSet={srcSet}
						sizes={sizes}
						src={srcSet ? src : undefined}
					/>
				) : (
					<img
						ref={imgRef}
						alt={alt}
						className={'image__src'}
						onLoad={() => setLoaded(true)}
						src={src}
					/>
				))}
		</div>
	)
}

export default Image
