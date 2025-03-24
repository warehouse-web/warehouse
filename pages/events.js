import Head from 'next/head'

import { WEB_NAME } from '_options'
import { Home } from '_views'

import { reorderItems, getItems } from '_api'

const EventsPage = ({ posts, footer }) => {
	// console.log(posts)

	return (
		<>
			<Head>
				<title>Events - {WEB_NAME}</title>
			</Head>
			<Home {...{ posts, footer }} />
		</>
	)
}
export default EventsPage

export async function getStaticProps() {
	const postsArray = ((context) => {
		return getItems(context, false)
	})(require.context('../content/events', true, /\.\/.*\.md$/))

	let posts = reorderItems(postsArray)

	return {
		props: {
			posts,
		},
	}
}
