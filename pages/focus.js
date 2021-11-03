import Head from 'next/head'

import { WEB_NAME } from '_options'
import { Home } from '_views'

import { reorderItems, getItems } from '_api'

const FocusPage = ({ posts, footer }) => {
	return (
		<>
			<Head>
				<title>Focus - {WEB_NAME}</title>
			</Head>
			<Home {...{ posts, footer }} />
		</>
	)
}
export default FocusPage

export async function getStaticProps() {
	const postsArray = ((context) => {
		return getItems(context, false)
	})(require.context('../content/focus', true, /\.\/.*\.md$/))

	let posts = reorderItems(postsArray)

	return {
		props: {
			posts,
		},
	}
}
