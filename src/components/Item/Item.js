import { isDateBeforeToday, renderImg, postType, postSlug } from '_utils'
import Link from 'next/link'
import moment from 'moment'

const Index = ({ post = {}, active = {}, activeSlug = '', setLogoImg = undefined }) => {
	const { frontmatter = {}, slug = '' } = post
	const {
		title = '',
		date = false,
		location = false,
		templateKey = '',
		author = '',
		content = [],
	} = frontmatter
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

	const typeslug = postSlug(templateKey)

	const firstImg = content[0] && content[0].image ? content[0].image : false

	return (
		<article
			className={`Item ${slug === activeSlug ? 'is-selected' : ''}`}
			onPointerEnter={() => setLogoImg(firstImg)}
			onPointerLeave={() => setLogoImg(false)}
		>
			<Link href={'/' + typeslug + '/' + slug}>
				<a>
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
