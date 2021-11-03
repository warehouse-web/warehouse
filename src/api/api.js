import matter from 'gray-matter'
import { slugify, postSlug } from '_utils'
import sizeOf from 'image-size'
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

export function getItems(context, path) {
	const keys = context.keys()
	const values = keys.map(context)

	const data = keys.map((key, index) => {
		let file = key.replace(/^.*[\\\/]/, '').slice(0, -3)
		let slug = slugify(file)
		const value = values[index]
		const document = matter(value.default)
		const typeslug = path ? path : postSlug(document.data.templateKey)

		return {
			...document.data,
			body: document.content,
			slug: '/' + typeslug + '/' + slug,
		}
	})
	return data
}

export function reorderItems(postsArray) {
	let posts = postsArray
	posts = posts.sort((a, b) => (a.date < b.date ? 1 : -1))

	return normalizeItems(posts)
}

export function normalizeItems(posts) {
	let data = []

	for (let i = 0; i < posts.length; i++) {
		const {
			title = '',
			date = false,
			location = false,
			templateKey = '',
			author = '',
			content = [],
			PDF = '',
			price = false,
			btw = '21',
			slug = '',
		} = posts[i]

		data.push({
			title,
			date,
			location,
			templateKey,
			author,
			content: normalizeContent(content),
			PDF,
			price,
			btw,
			slug,
		})
	}

	return data
}

export function normalizeContent(content) {
	let data = []

	for (let i = 0; i < content.length; i++) {
		const el = content[i]

		if (el.type === 'images') {
			// const sizeOf = require('image-size')
			// const dimensions = sizeOf('images/funny-cats.png')
			// console.log(dimensions.width, dimensions.height)

			if (el.image) {
				const dimensions = sizeOf('./public/' + el.image)

				data.push({
					type: el.type,
					dimensions: dimensions,
					image: el.image,
				})
			}
		} else {
			data.push(el)
		}
	}

	return data
}
