import { useEffect, useRef } from 'react'
import ReactMarkdown from 'react-markdown'

import { postSlug } from '_utils'
import { CloseButton } from '_components'

const Detail = ({ active = {} }) => {
	const refMain = useRef(null)
	const { frontmatter = {}, slug = '' } = active
	const {
		title = '',
		date = false,
		location = false,
		templateKey = '',
		author = '',
		content = [],
		PDF = '',
		price = false,
		btw = '21',
	} = frontmatter
	const typeslug = postSlug(templateKey)

	useEffect(() => {
		if (!refMain.current) return
		refMain.current.scrollTop = 0
	}, [active])

	const firstImg = content[0] && content[0].image ? content[0].image : false

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
						} else if (el.type === 'cart-button') {
							return (
								<div key={`content--` + i}>
									{price && (
										<div className='Detail__price'>
											<div className='Detail__price-inner'>
												<div className='Detail__price-price'>
													{price} EUR
												</div>
												<div className='Detail__price-btn'>
													<button
														className='btn btn--cart snipcart-add-item'
														data-item-id={slug}
														data-item-price={price}
														data-item-url={
															'https://whwb-dev.netlify.app/shop/' +
															slug
														}
														data-item-image={
															firstImg &&
															'https://whwb-dev.netlify.app' +
																firstImg
														}
														data-item-name={title}
														data-item-description={author}
														data-item-quantity='1'
														data-item-taxes={
															btw === '9'
																? 'BTW (9%)'
																: btw === 'none'
																? ''
																: 'BTW (21%)'
														}
														data-item-has-taxes-included='true'
													>
														{el.text ? el.text : 'Add to cart'}
													</button>
												</div>
											</div>
										</div>
									)}
								</div>
							)
						} else if (el.type === 'text') {
							return (
								<div className='Detail__text' key={`content-two--` + i}>
									<ReactMarkdown escapeHtml={false} source={el.body} />
								</div>
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
