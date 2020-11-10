import ReactMarkdown from 'react-markdown'
import { CloseButton, Newsletter } from '_components'

const Page = ({ frontmatter }) => {
	if (!frontmatter) return <></>

	const { title = '', text } = frontmatter

	return (
		<div className='Page'>
			<CloseButton back={'/'} />
			<div className='Page__wrapper'>
				<div className='Page__left'>
					<h2 className='Page__title'>{title}</h2>
				</div>
				<div className='Page__right'>
					<div className='Page__text'>
						<ReactMarkdown linkTarget={'_blank'} escapeHtml={false} source={text} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Page
