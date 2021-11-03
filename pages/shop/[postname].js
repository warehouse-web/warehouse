import Head from 'next/head'
import { slugify } from '_utils'

import { WEB_NAME } from '_options'
import { Home } from '_views'

import { reorderItems, getItems } from '_api'

const ShopPage = ({ posts, active, footer }) => {
	const { frontmatter = {}, slug = '' } = active
	const { title = '' } = frontmatter

	return (
		<>
			<Head>
				<title>
					{title} - {WEB_NAME}
				</title>
			</Head>
			<Home {...{ posts, footer, active, activeSlug: slug, thumb: true }} />
		</>
	)
}
export default ShopPage

export async function getStaticProps({ ...ctx }) {
	const { postname } = ctx.params

	const postsArray = ((context) => {
		return getItems(context, false)
	})(require.context(`../../content/shop`, true, /\.\/.*\.md$/))

	let posts = reorderItems(postsArray)

	// post
	const data = posts.filter((item) => item.slug === '/shop/' + postname)

	//footer
	const pagesArray = ((context) => {
		return getItems(context, 'pages')
	})(require.context(`../../content/pages`, true, /\.\/.*\.md$/))

	return {
		props: {
			posts,
			active: data[0] ? data[0] : false,
			footer: pagesArray,
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
	})(require.context('../../content/shop', true, /\.\/.*\.md$/))

	const paths = blogSlugs.map((slug) => `/shop/${slug}`)

	return {
		paths,
		fallback: false,
	}
}
