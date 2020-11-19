import Head from 'next/head'
import matter from 'gray-matter'

import { WEB_NAME } from '_options'
import { Home } from '_views'

const ShopPage = ({ posts, footer }) => {
	return (
		<>
			<Head>
				<title>Shop - {WEB_NAME}</title>
			</Head>
			<Home {...{ posts, footer }} />
		</>
	)
}
export default ShopPage

export async function getStaticProps() {
	const postsArray = ((context) => {
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

	let posts = postsArray
	posts = posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))

	//footer
	const pagesArray = ((context) => {
		const keys = context.keys()
		const values = keys.map(context)

		const data = keys.map((key, index) => {
			let slug = key.replace(/^.*[\\\/]/, '').slice(0, -3)
			const value = values[index]
			const document = matter(value.default)
			return {
				title: document.data.title,
				slug: 'pages/' + slug,
			}
		})
		return data
	})(require.context('../content/pages', true, /\.md$/))

	return {
		props: {
			posts,
			footer: pagesArray,
		},
	}
}
