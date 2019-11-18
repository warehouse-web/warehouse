import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'
import DivOverlay from '../templates/DivOverlay'
import Content, { HTMLContent, useMedia } from '../components/utils'
import FileSaver from "file-saver"

import { Page, Image,  Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
	page: {
	  flexDirection: 'row',
	  backgroundColor: '#E4E4E4'
	},
	image: { flexGrow: 1, backgroundColor: 'grey', padding: 10 },
	section: {
	  margin: 10,
	  padding: 10,
	  flexGrow: 1
	}
  });

	const MyDocument = ({activeFocus}) => (

	<Document>
	  <Page size="A4" style={styles.page}>
		<View style={styles.section}>
			{activeFocus.frontmatter.intro.blurbs.map(el => {
				return(
					<>
						<Text>{el.text}</Text>
						<Image src ={el.image.childImageSharp.fluid.src} style={styles.image}/>
					</>
				)
			})}
		</View>


	  </Page>
	</Document>
  );

const FocusRoll = ({data}) => {
const [activeFocus, setActiveFocus] = useState({})
const [showFocusDetail,setShowFocusDetail] = useState(false)
const [mount, setMount] = useState(false)
// this helps to run build without errors
useEffect(() => {
	setMount(true)
}, [])

  const openFocus = (focus) => {
	focus &&
	window.history.pushState(
	  {page: 1},
	  focus.frontmatter.title,
	  `?focus=${focus.frontmatter.title}`
	);
	if (focus !== !!activeFocus) {
	  setActiveFocus(focus)
	  setShowFocusDetail(true);
	  }
	}

	const PostContent = HTMLContent || Content
	const match = useMedia("(max-width: 900px) ");
	const { edges: posts } = data.allMarkdownRemark

	return (
	<>
	{/* <DivOverlay /> */}
	<div className="wrapper">
	  <div className="article-list">
		{posts &&
		  posts.map(({ node: post }) => (
			<div key={post.id}>
			  <article
				onClick={() => openFocus(post)}
				className={`blog-list-item post`}
			  >
				<h2 className='post-type'>Focus</h2>
				<header>
				  <p className="post-meta">
					  {post.frontmatter.title}
					  {post.frontmatter.location}
				  </p>
				</header>

			  </article>
			</div>
		  ))}
		  { !posts &&
			<h1>No Focus To Show ... Yet</h1>
		  }
	</div>
	{showFocusDetail && (
		<div className={`article-detail ${match ? `mobile` : ``}`}>
			<div className='close' onClick={() => setShowFocusDetail(false)}>
			  <span></span>
			  <span></span>
			</div>
		  {/* <p className="article-ID">{activeFocus.frontmatter.warehouseID}</p>
		  <h2 className="article-detail-title">{activeFocus.frontmatter.title}</h2> */}
		  {console.log('activeFocus:', activeFocus)}

		{
				mount && (
					<PDFDownloadLink document={<MyDocument activeFocus={activeFocus} />} fileName="somename.pdf">
					{({ blob, url, loading, error }) => {
						if (error) console.log(error)
						if (url) console.log(url)
						return (
						!loading && FileSaver.saveAs(blob, "works.pdf")
						)
					}}
						Download Here: {activeFocus.frontmatter.title}
					</PDFDownloadLink>
				)
		}
			{/* <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
				{({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
			</PDFDownloadLink> */}
		  {<PostContent className = 'content' content={activeFocus.html} />}

		  {activeFocus.excerpt}
		</div>
	  )}
	</div>
	</>
  )
}


FocusRoll.propTypes = {
  data: PropTypes.shape({
	allMarkdownRemark: PropTypes.shape({
	  edges: PropTypes.array,
	}),
  }),
}

export default () => (
  <StaticQuery
	query={graphql`
	query FocusRollQuerry {
		allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {frontmatter: {templateKey: {eq: "focus-page"}}}) {
		  edges {
			node {
			  id
			  html
			  fields {
				slug
			  }
			  frontmatter {
				warehouseID
				title
				intro {
				  blurbs {
					image {
					  childImageSharp {
						fluid {
						  src
						}
					  }
					  relativePath
					  absolutePath
					  id
					}
					text
				  }
				}
				templateKey
				date(formatString: "MMMM DD, YYYY")
				podcastURL
			  }
			}
		  }
		}
	  }
	`}
	render={(data, count) => <FocusRoll data={data} count={count} />}
  />
)

