export const isDateBeforeToday = (date) => {
	let postDate = Date.parse(date)
	let currDate = Date.parse(new Date())
	return postDate - currDate < 0
}

export const postType = (templateKey) => {
	switch (templateKey) {
		case 'event-post':
			return 'Event'
		case 'podcast-page':
			return 'Podcast'
		case 'product-page':
			return 'Shop'
		case 'focus-page':
			return 'Focus'
		default:
			return null
	}
}

export const postSlug = (templateKey) => {
	switch (templateKey) {
		case 'event-post':
			return 'events'
		case 'podcast-page':
			return 'podcast'
		case 'product-page':
			return 'shop'
		case 'focus-page':
			return 'focus'
		default:
			return ''
	}
}

export const renderImg = (post, setDivStyle) => {
	if (
		post.frontmatter.content[0].image &&
		post.frontmatter.content[0].image.publicURL !== undefined
	) {
		setDivStyle(post.frontmatter.content[0].image)
	} else {
		setDivStyle(false)
	}
}
