import matter from 'gray-matter'
import { slugify } from '_utils'

export async function getData(url) {
	const content = await import(`content/${url}.md`)
	const dataContent = matter(content.default)

	const data = {
		...dataContent.data,
		body: dataContent.content,
	}

	return data
}

export async function getPaths(type) {
	const blogSlugs = ((context) => {
		const keys = context.keys()
		const data = keys.map((key, index) => {
			let file = key.replace(/^.*[\\\/]/, '').slice(0, -3)
			let slug = slugify(file)

			return slug
		})
		return data
	})(require.context(`content/${type}`, true, /\.\/.*\.md$/))

	const paths = blogSlugs.map((slug) => `/${type}/${slug}`)

	return paths
}

export async function getItems(dir) {
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
	})(require.context(`../../content/shop`, true, /\.\/.*\.md$/))

	let posts = postsArray
	posts = posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))

	return posts
}
