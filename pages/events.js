import Head from 'next/head'
import matter from 'gray-matter'
import { slugify } from '_utils'

import { WEB_NAME } from '_options'
import { Home } from '_views'

const EventsPage = ({ posts, footer }) => {
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
		const keys = context.keys()
		const values = keys.map(context)

		const data = keys.map((key, index) => {
			let file = key.replace(/^.*[\\\/]/, '').slice(0, -3)
			let slug = slugify(file)
			const value = values[index]
			const document = matter(value.default)
			return {
				frontmatter: document.data,
				markdownBody: document.content,
				slug,
			}
		})
		return data
	})(require.context('../content/events', true, /\.md$/))

	let posts = postsArray
	posts = posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))

	return {
		props: {
			posts,
		},
	}
}
