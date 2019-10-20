import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/utils'
import '../components/main.css'

export const ProductPageTemplate = ({
  content,
  contentComponent,
  warehouseID,
  // tags,
  date,
  title,
  helmet,
  author,
}) => {
  const ProductContent = contentComponent || Content

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

            <ProductContent
             style = {{
               justifyContent: 'left',
               textAlign:'left',
               margin: '3.8em',
               marginTop: '1.5rem'
             }} className='content' content={content} />
             <p>{author}</p>

            {/* Tag spot */}
            {/* {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null} */}
    </div>
  )
}

ProductPageTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Product = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProductPageTemplate
        content={post.html}
        contentComponent={HTMLContent}
        warehouseID = {post.frontmatter.warehouseID}
        date = {post.frontmatter.date}
        // tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        author={post.frontmatter.author}
      />
    </Layout>
  )
}

Product.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Product

export const pageQuery = graphql`
  query ProductByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        warehouseID
        date(formatString: "MMMM DD, YYYY")
        author
      }
    }
  }
`
