import Head from 'next/head'
import matter from 'gray-matter'

import { WEB_NAME } from '_options'
import { PageAbout } from '_views'

const FocusPage = ({ post }) => {
	return (
		<>
			<Head>
				<title>About - {WEB_NAME}</title>
			</Head>
			<PageAbout {...post} />
		</>
	)
}
export default FocusPage

export async function getStaticProps() {
	const content = await import(`../content/about/index.md`)
	const data = matter(content.default)

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
			post: { frontmatter: data.data, markdownBody: data.content },
			footer: pagesArray,
		},
	}
}
