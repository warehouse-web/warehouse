/**
 * Main Filters
 */
export function splitInto(array, into = 3) {
	if (!array) return []

	let currentIndex = -1
	const nr = Math.ceil(array.length / into)
	let data = []

	for (let i = 0; i < array.length; i++) {
		if (i % nr === 0) {
			currentIndex += 1
		}
		if (!data[currentIndex]) {
			data[currentIndex] = []
		}
		const element = array[i]
		data[currentIndex].push(element)
	}

	return data
}
