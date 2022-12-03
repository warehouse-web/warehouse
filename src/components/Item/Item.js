import { isDateBeforeToday, renderImg, postType, postSlug } from '_utils'
import Link from 'next/link'
import moment from 'moment'

import Image from 'next/image'

const Index = ({
	post = {},
	active = {},
	activeSlug = '',
	setLogoImg = undefined,
	// thumb = false,
}) => {
	const {
		title = '',
		date = false,
		location = false,
		templateKey = '',
		author = '',
		content = [],
		slug = '',
	} = post

	const authorFormat =
		templateKey === 'product-page' || templateKey === 'focus-page'
			? author
				? 'By ' + author
				: false
			: false
	const dateFormat = templateKey !== 'product-page' ? moment(date).format('MMMM D, YYYY') : false
	const formatDate =
		templateKey === 'event-post' && date
			? isDateBeforeToday(date)
				? 'Past'
				: 'Upcoming'
			: false
	const type = postType(templateKey)

	const firstImg = content[0] && content[0].image ? content[0] : false

	return (
		<article
			className={`Item ${slug === activeSlug ? 'is-selected' : ''}`}
			onPointerEnter={() => setLogoImg(firstImg)}
			onPointerLeave={() => setLogoImg(false)}
		>
			<Link href={slug} scroll={false}>
				<a className='Item__main'>
					<div className='Item__thumb'>
						<div
							className={'image is-loaded'}
							style={{
								paddingBottom: `${1.25 * 100}%`,
							}}
						>
							{firstImg && (
								<Image
									layout='fixed'
									width={95}
									height={120}
									src={firstImg.image}
									alt={''}
								/>
							)}
						</div>
					</div>

					<div className='Item__header'>
						{formatDate && (
							<div className='Item__type'>
								{formatDate} {type}
							</div>
						)}
						{templateKey !== 'event-post' && <div className='Item__type'>{type}</div>}
						<h1 className='Item__title'>{title}</h1>
						{dateFormat && <h2 className='Item__meta'>{dateFormat}</h2>}
						{authorFormat && <h2 className='Item__meta'>{authorFormat}</h2>}
						{location && <h2>{location}</h2>}
					</div>
				</a>
			</Link>
		</article>
	)
}

export default Index
