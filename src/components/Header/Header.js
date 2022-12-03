import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { show_shop } from '_options'

const Header = () => {
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const cartRef = useRef(null)

	const menu = [
		{
			href: '/',
			text: 'All',
		},
		{
			href: '/events',
			text: 'Events',
		},
		{
			href: '/focus',
			text: 'Focus',
		},
		{
			href: '/podcast',
			text: 'Podcast',
		},
		{
			href: '/shop',
			text: 'Shop',
		},
	]

	const parentLink = router.pathname.split('/')[1] ? '/' + router.pathname.split('/')[1] : false

	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		setTimeout(() => {
			if (!cartRef.current) return false
			const total = cartRef.current.textContent
			if (total !== '0') {
				const cart = document.querySelector('.Header__item--cart')
				if (cart) {
					cart.classList.remove('Header__item--hide')
				}
			}
		}, 1000)
	}, [router])

	return (
		<header className={'Header'}>
			<div className='Header__inner'>
				<div className={'Header__menu' + (open ? ' is-open' : '')}>
					<ul>
						{menu.map(({ href = '', text = '' }, i) => (
							<li key={'headerMenu--' + i}>
								<Link
									href={href}
									className={
										router.pathname === href || parentLink === href
											? 'is-active'
											: ''
									}
									onClick={(e) => setOpen(false)}
								>
									<span>{text}</span>
								</Link>
							</li>
						))}
						{show_shop && (
							<li className={'Header__item Header__item--cart Header__item--hide'}>
								<a className='btn btn--cart snipcart-checkout'>
									Cart (
									<span className='snipcart-items-count' ref={cartRef}>
										0
									</span>
									)
								</a>
							</li>
						)}
					</ul>
				</div>

				<Link href='/about' className='Header__logo'>
					Warehouse
				</Link>
				<div
					className={'Header__toggle' + (open ? ' is-open' : '')}
					onClick={(e) => setOpen(!open)}
					aria-label='Toggle menu'
					aria-expanded={open}
				>
					<span />
					<span />
					<span />
				</div>
			</div>
		</header>
	)
}

export default Header
