import Head from 'next/head'
import { slugify } from '_utils'

import { WEB_NAME } from '_options'
import { Home } from '_views'

import { reorderItems, getItems } from '_api'

const FocusPage = ({ posts, active, footer }) => {
	const { frontmatter = {}, slug = '' } = active
	const { title = '' } = frontmatter

	return (
		<>
			<Head>
				<title>
					{title} - {WEB_NAME}
				</title>
			</Head>
			<Home {...{ posts, footer, active, activeSlug: slug }} />
		</>
	)
}
export default FocusPage

export async function getStaticProps({ ...ctx }) {
	const { postname } = ctx.params

	const postsArray = ((context) => {
		return getItems(context, false)
	})(require.context('../../content/focus', true, /\.\/.*\.md$/))

	let posts = reorderItems(postsArray)

	// post
	const data = posts.filter((item) => item.slug === '/focus/' + postname)

	return {
		props: {
			posts,
			active: data[0] ? data[0] : false,
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
	})(require.context('../../content/focus', true, /\.\/.*\.md$/))

	const paths = blogSlugs.map((slug) => `/focus/${slug}`)

	return {
		paths,
		fallback: false,
	}
}
