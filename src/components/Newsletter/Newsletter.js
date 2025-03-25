const Newsletter = () => {
	return (
		<div className='Newsletter'>
			<p>Newsletter</p>
			<div id='mc_embed_shell' className='newsletter-form'>
				<div id='mc_embed_signup'>
					<form
						action='//thisiswarehouse.us5.list-manage.com/subscribe/post?u=399b6f2fb11e21f440e25e7f2&amp;id=3684c37c49'
						method='post'
						id='mc-embedded-subscribe-form'
						name='mc-embedded-subscribe-form'
						target='_self'
						noValidate
					>
						<div id='mc_embed_signup_scroll'>
							<div className='newsletter-input'>
								<input
									type='email'
									name='EMAIL'
									id='mce-EMAIL'
									required=''
									placeholder='Your email'
									defaultValue=''
								/>
								<input
									type='submit'
									name='subscribe'
									id='mc-embedded-subscribe'
									value='Submit'
								/>
							</div>
							<div id='mce-responses'>
								<div id='mce-error-response' style={{ display: 'none' }}></div>
								<div id='mce-success-response' style={{ display: 'none' }}></div>
							</div>
							<div
								aria-hidden='true'
								style={{ position: 'absolute', left: '-5000px' }}
							>
								<input
									type='text'
									name='b_399b6f2fb11e21f440e25e7f2_3684c37c49'
									tabIndex='-1'
									defaultValue=''
								/>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Newsletter
