// import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Header, Meta } from '_components'

// const Cursor = dynamic(() => import('../../components/Cursor/Cursor'), { ssr: false })

const Layout = (props) => {
	const [open, setOpen] = useState(false)
	return (
		<div className={'Layout'}>
			<Meta />
			<Header {...props} />
			{/* <Cursor /> */}
			<main>{props.children}</main>
		</div>
	)
}

export default Layout
