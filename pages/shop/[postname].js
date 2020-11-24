import Head from 'next/head'
import matter from 'gray-matter'
import { slugify } from '_utils'

import { WEB_NAME } from '_options'
import { Home } from '_views'

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
			<Home {...{ posts, footer, active, activeSlug: slug }} />
		</>
	)
}
export default ShopPage

export async function getStaticProps({ ...ctx }) {
	const { postname } = ctx.params

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
	})(require.context('../../content/shop', true, /\.md$/))

	let posts = postsArray
	posts = posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))

	// post
	const data = posts.filter((item) => item.slug === postname)

	//footer
	const pagesArray = ((context) => {
		const keys = context.keys()
		const values = keys.map(context)

		const data = keys.map((key, index) => {
			let file = key.replace(/^.*[\\\/]/, '').slice(0, -3)
			let slug = slugify(file)
			const value = values[index]
			const document = matter(value.default)
			return {
				title: document.data.title,
				slug: 'pages/' + slug,
			}
		})
		return data
	})(require.context('../../content/pages', true, /\.md$/))

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
	})(require.context('../../content/shop', true, /\.md$/))

	const paths = blogSlugs.map((slug) => `/shop/${slug}`)

	return {
		paths,
		fallback: false,
	}
}
