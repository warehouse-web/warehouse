import Head from 'next/head'

import { WEB_NAME } from '_options'
import { Home } from '_views'

import { reorderItems, getItems } from '_api'

const IndexPage = ({ posts, footer }) => {
	return (
		<>
			<Head>
				<title>{WEB_NAME}</title>
			</Head>
			<Home {...{ posts, footer }} />
		</>
	)
}
export default IndexPage

export async function getStaticProps() {
	const eventsArray = ((context) => {
		return getItems(context, false)
	})(require.context('../content/events', true, /\.\/.*\.md$/))

	const focusArray = ((context) => {
		return getItems(context, false)
	})(require.context('../content/focus', true, /\.\/.*\.md$/))

	const shopArray = ((context) => {
		return getItems(context, false)
	})(require.context('../content/shop', true, /\.\/.*\.md$/))

	let posts = reorderItems([...eventsArray, ...focusArray, ...shopArray])

	return {
		props: {
			posts,
		},
	}
}
