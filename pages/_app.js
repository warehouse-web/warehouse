import '../src/assets/scss/App.scss'

import { Layout } from '_views'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

export default MyApp
