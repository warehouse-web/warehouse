import Head from 'next/head'
import { WEB_NAME } from '_options'
import { NotFound } from '_views'

const NotFoundPage = () => {
	return (
		<>
			<Head>
				<title>Not Found - {WEB_NAME}</title>
			</Head>
			<NotFound />
		</>
	)
}
export default NotFoundPage
