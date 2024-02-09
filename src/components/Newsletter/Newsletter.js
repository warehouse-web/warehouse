import MailchimpSubscribe from 'react-mailchimp-subscribe'

const Newsletter = () => {
	const url =
		'//thisiswarehouse.us5.list-manage.com/subscribe/post?u=399b6f2fb11e21f440e25e7f2&amp;id=3684c37c49'
	return (
		<div className='Newsletter'>
			<p>Newsletter</p>
			<MailchimpSubscribe url={url} />
		</div>
	)
}

export default Newsletter
