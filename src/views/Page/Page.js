import ReactMarkdown from 'react-markdown'
import { CloseButton } from '_components'

const Page = ({ title = '', text }) => {
	return (
		<div className='Page'>
			<CloseButton back={'/'} />
			<div className='Page__wrapper'>
				<div className='Page__left'>
					<h2 className='Page__title'>{title}</h2>
				</div>
				<div className='Page__right'>
					<div className='Page__text'>
						<ReactMarkdown linkTarget={'_blank'} children={text} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
