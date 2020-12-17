import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang='en'>
				<Head>
					<script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
					<link rel='preconnect' href='https://app.snipcart.com' />
					<link rel='preconnect' href='https://cdn.snipcart.com' />
					<link
						rel='stylesheet'
						href='https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.css'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<script
						async
						src='https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.js'
					></script>
					<div
						id='snipcart'
						data-api-key='OWU4MzQxMjgtZDJiNi00ZWQ5LTk1NDMtNWJjYTBkMWY5NTUzNjM3MzYyOTE0ODgwMzYwMDQ3'
						hidden
					></div>
						<payment section='top'>
							<div>
								<p>
									<snipcart-checkbox
										name='privacy-policy'
										required
									></snipcart-checkbox>
									<snipcart-label for='privacy-policy'>
										I have read and agree to the&nbsp;
										<a href='/pages/privacy-policy' target='_blank'>
											Privacy Policy
										</a>
									</snipcart-label>
								</p>
							</div>
						</payment>
					</div>
				</body>
			</Html>
		)
	}
}
