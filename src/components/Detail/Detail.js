import { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

import { postSlug } from '_utils'
import { CloseButton } from '_components'

const Detail = ({ active = {} }) => {
	const refMain = useRef(null)
	const { frontmatter = {} } = active
	const {
		title = '',
		date = false,
		location = false,
		templateKey = '',
		author = '',
		content = [],
		PDF = '',
	} = frontmatter
	const typeslug = postSlug(templateKey)

	useEffect(() => {
		if (!refMain.current) return
		refMain.current.scrollTop = 0
	}, [active])

	return (
		<div className={`Detail`} ref={refMain}>
			<CloseButton back={'/' + typeslug} />
			<h2 className='Detail__title'>{title}</h2>
			<section className='Detail__content'>
				{content &&
					content.map((el, i) => {
						if (el.type === 'images') {
							return (
								<div key={`content-two--` + i}>
									<img src={el.image} alt='' />
									<p className='caption'>{el.caption}</p>
								</div>
							)
						} else if (el.type === 'text') {
							return (
								<ReactMarkdown
									key={`content-two--` + i}
									escapeHtml={false}
									source={el.body}
								/>
							)
						}
					})}
				{PDF && (
					<a className='pdf-download' href={PDF} target='_blank'>
						Download Article
					</a>
				)}
			</section>
		</div>
	)
}

export default Detail
