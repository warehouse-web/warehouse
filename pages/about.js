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

	return {
		props: {
			post: { frontmatter: data.data, markdownBody: data.content },
		},
	}
}
