import Mailchimp from 'react-mailchimp-form'

const Newsletter = () => {
	return (
		<div className='Newsletter'>
			<p>Newsletter</p>

			<Mailchimp
				action='https://thisiswarehouse.us5.list-manage.com/subscribe/post?u=399b6f2fb11e21f440e25e7f2&amp;id=3684c37c49'
				fields={[
					{
						name: 'EMAIL',
						placeholder: 'Email',
						type: 'email',
						required: true,
					},
				]}
				messages={{
					sending: 'Sending...',
					success: 'Thank you for subscribing!',
					error: 'An unexpected internal error has occurred.',
					empty: 'You must write an e-mail.',
					duplicate: 'Too many subscribe attempts for this email address',
					button: 'Subscribe',
				}}
			/>
		</div>
	)
}

export default Newsletter
