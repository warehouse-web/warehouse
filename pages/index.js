import Head from 'next/head'
import matter from 'gray-matter'

import { WEB_NAME } from '_options'
import { Home } from '_views'

const IndexPage = ({ posts }) => {
	return (
		<>
			<Head>
				<title>Events - {WEB_NAME}</title>
			</Head>
			<Home {...{ posts }} />
		</>
	)
}
export default IndexPage

export async function getStaticProps() {
	const eventsArray = ((context) => {
		const keys = context.keys()
		const values = keys.map(context)

		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
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

	const focusArray = ((context) => {
		const keys = context.keys()
		const values = keys.map(context)

		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
			const value = values[index]
			const document = matter(value.default)
			return {
				frontmatter: document.data,
				markdownBody: document.content,
				slug,
			}
		})
		return data
	})(require.context('../content/focus', true, /\.md$/))

	const shopArray = ((context) => {
		const keys = context.keys()
		const values = keys.map(context)

		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
			const value = values[index]
			const document = matter(value.default)
			return {
				frontmatter: document.data,
				markdownBody: document.content,
				slug,
			}
		})
		return data
	})(require.context('../content/shop', true, /\.md$/))

	let posts = [...eventsArray, ...focusArray, ...shopArray]
	posts = posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))

	return {
		props: {
			posts,
		},
	}
}
