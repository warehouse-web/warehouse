import { useState } from 'react'
import { Item, Detail, MagicLogo } from '_components'

const Home = ({ posts = [], active = false, activeSlug = '' }) => {
	const [logoImg, setLogoImg] = useState(false)

	return (
		<div className={'Home'}>
			<div className='Home__list'>
				{posts &&
					posts.map((post, i) => {
						return (
							<Item
								{...{ post, active, activeSlug, setLogoImg }}
								key={'post--' + i}
							/>
						)
					})}

				{posts.length === 0 && <h1>Coming soon..</h1>}
			</div>

			{active ? <Detail active={active} /> : <MagicLogo {...{ logoImg }} />}
		</div>
	)
}

export default Home
