import Head from 'next/head'
import matter from 'gray-matter'
import { slugify } from '_utils'

import { WEB_NAME } from '_options'
import { Page } from '_views'

const PrivacyPages = ({ post }) => {
	const { frontmatter = {}, slug = '' } = post
	const { title = '' } = frontmatter

	return (
		<>
			<Head>
				<title>
					{title} - {WEB_NAME}
				</title>
			</Head>
			<Page {...post} />
		</>
	)
}
export default PrivacyPages

export async function getStaticProps({ ...ctx }) {
	const { postname } = ctx.params

	// post
	const content = await import(`../../content/pages/${postname}.md`)
	const data = matter(content.default)

	return {
		props: {
			post: {
				frontmatter: data.data,
				markdownBody: data.content,
				slug: postname,
			},
		},
	}
}

export async function getStaticPaths() {
	const blogSlugs = ((context) => {
		const keys = context.keys()
		const data = keys.map((key, index) => {
			let file = key.replace(/^.*[\\\/]/, '').slice(0, -3)
			let slug = slugify(file)
			return slug
		})
		return data
	})(require.context('../../content/pages', true, /\.md$/))

	const paths = blogSlugs.map((slug) => `/pages/${slug}`)

	return {
		paths,
		fallback: false,
	}
}
