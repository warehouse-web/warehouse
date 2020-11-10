import { WEB_API } from '_options'
const API_URL = WEB_API + '/api'

async function fetchAPI(slug) {
	const res = await fetch(API_URL + slug)
	const json = await res.json()

	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to fetch API')
	}
	return json
}

async function postAPI(slug, formdata) {
	const res = await fetch(API_URL + slug, {
		headers: { 'Content-Type': 'application/json' },
		method: 'POST',
		body: JSON.stringify(formdata),
	})
	const json = await res.json()

	if (json.errors) {
		console.error(json.errors)
		throw new Error('Failed to post API')
	}
	return json
}

export async function getData(slug) {
	const data = await fetchAPI(slug)
	return data ? data : []
}

export async function postData(slug, formdata) {
	const data = await postAPI(slug, formdata)
	return data ? data : []
}
