import Head from 'next/head'

import { WEB_NAME } from '_options'
import { Home } from '_views'

const PodcastPage = () => {
	return (
		<>
			<Head>
				<title>Podcast - {WEB_NAME}</title>
			</Head>
			<Home />
		</>
	)
}
export default PodcastPage
