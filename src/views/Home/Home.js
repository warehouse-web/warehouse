import { useState } from 'react'
import { Item, Detail, MagicLogo, Footer } from '_components'

const Home = ({ posts = [], footer = [], active = false, activeSlug = '', thumb = false }) => {
	const [logoImg, setLogoImg] = useState(false)

	return (
		<div className={'Home'}>
			<div className='Home__list'>
				{posts &&
					posts.map((post, i) => {
						return (
							<Item
								{...{ post, active, activeSlug, setLogoImg, thumb }}
								key={'post--' + i}
							/>
						)
					})}

				{posts.length === 0 && <h1>Coming soon..</h1>}
			</div>

			<Footer footer={footer} />

			{active ? <Detail active={active} /> : <MagicLogo {...{ logoImg }} />}
		</div>
	)
}

export default Home
