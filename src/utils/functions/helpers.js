/**
 * Read bytes
 *
 * @param {string} string
 * @returns {string}
 */

export function readBytes(bytes) {
	var i = Math.floor(Math.log(bytes) / Math.log(1024)),
		sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

	return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i]
}

/**
 * Captilize the first letter of a string
 *
 * @param {string} string
 * @returns {string}
 */
export function capitalize(string) {
	if (string.length === 0) return ''
	return string[0].toLocaleUpperCase() + string.substr(1)
}

/**
 * Generate a random string
 *
 * @param {number} characters of characters in the string
 * @returns {string} random string
 */
export function randomString(characters = 5) {
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
	let rndmStr = ''

	for (let i = 0; i < characters; i++)
		rndmStr += possible.charAt(Math.floor(Math.random() * possible.length))

	return rndmStr
}

//
export function slugify(text) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, '') // Trim - from end of text
}
