import Link from 'next/link'

const Footer = ({ footer = [] }) => {
	return (
		<footer className={'Footer'}>
			<div className='Footer__inner'>
				<ul>
					{footer.map(({ slug = '', title = '' }, i) => (
						<li key={'footerMenu--' + i}>
							<Link href={slug}>
								<a>
									<span>{title}</span>
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}

export default Footer
