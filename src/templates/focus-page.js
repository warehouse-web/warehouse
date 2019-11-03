import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/utils'
import '../components/main.css'

export const FocusPageTemplate = ({
  content,
  contentComponent,
  location,
  date,
  // tags,
  title,
  warehouseID,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="event-detail">
      {helmet || ''}
            <p style={{
              fontSize: '.7rem',
              fontFamily: 'Arial, Helvetica, sans-serif',
              textAlign: 'center'
              }}
            >
              {warehouseID}
            </p>
            <h2 style={{
              textAlign:'center',
              fontSize: '2em',
              margin: '0 2.5rem 1rem',
              lineHeight: '1.1',
            }}>
              {title}
            </h2>
            <PostContent
             style = {{
               justifyContent: 'left',
               textAlign:'left',
               margin: '3.8em',
               marginTop: '1.5rem'
             }} className='content' content={content} />
    </div>
  )
}

FocusPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const FocusPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <FocusPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        location = {post.frontmatter.location}
        date = {post.frontmatter.date}
        warehouseID = {post.frontmatter.warehouseID}
        // tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

FocusPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default FocusPage

export const pageQuery = graphql`
  query FocusPageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        warehouseID
        title
        location
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
