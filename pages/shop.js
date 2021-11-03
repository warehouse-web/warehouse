import Head from 'next/head'

import { WEB_NAME } from '_options'
import { Home } from '_views'

import { reorderItems, getItems } from '_api'

const ShopPage = ({ posts, footer }) => {
	return (
		<>
			<Head>
				<title>Shop - {WEB_NAME}</title>
			</Head>
			<Home {...{ posts, footer, thumb: true }} />
		</>
	)
}
export default ShopPage

export async function getStaticProps() {
	const postsArray = ((context) => {
		return getItems(context, false)
	})(require.context(`../content/shop`, true, /\.\/.*\.md$/))

	let posts = reorderItems(postsArray)
	//footer
	const pagesArray = ((context) => {
		return getItems(context, 'pages')
	})(require.context(`../content/pages`, true, /\.\/.*\.md$/))

	return {
		props: {
			posts,
			footer: pagesArray,
		},
	}
}
