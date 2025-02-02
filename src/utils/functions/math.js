/**
 * Get the difference between two numbers
 *
 * @param {number} num1
 * @param {number} num2
 * @returns {number}
 */
export function diff(num1, num2) {
	return num1 > num2 ? num1 - num2 : num2 - num1
}

/**
 * Clamp a number between two numbers
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function clamp(value, min, max) {
	return Math.min(max, Math.max(min, value))
}

/**
 * Map a number between two numbers to two different numbers
 *
 * @param {array} from
 * @param {array} to
 * @param {number} s
 * @returns {number}
 */
export function map(from, to, s) {
	return to[0] + ((s - from[0]) * (to[1] - to[0])) / (from[1] - from[0])
}

/**
 * seconds to time
 *
 */
export function timestamp(time) {
	let totalSeconds = Math.floor(time)
	totalSeconds %= 3600
	let minutes = Math.floor(totalSeconds / 60)
	let seconds = totalSeconds % 60

	// If you want strings with leading zeroes:
	minutes = String(minutes).padStart(2, '0')
	seconds = String(seconds).padStart(2, '0')

	return minutes + ':' + seconds
}
