import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import '../components/main.css'

export const ProductPageTemplate = ({
  content,
  contentComponent,
  location,
  tags,
  date,
  title,
  helmet,
  image,
}) => {
  const ProductContent = contentComponent || Content

  return (
    <div className="event-detail">
      {helmet || ''}
            <h2 style={{
              textAlign:'center',
              fontSize:'2em',
              marginBottom: '.7em'
            }} className="article-detail-title">
              {title}
            </h2>
            <div style={{
              display: 'flex',
            }}

            className="article-image-wrapper">
              <img
              alt = ''
              style ={{
                maxWidth: '80%',
                margin: '0 auto',
              }}
               className="article-detail-image" src={image}/>
            </div>
            {location && (

              <p>Location: {location}</p>
            )}
            <p>{date}</p>

            <ProductContent content={content} />


            {/* Tag spot */}
            {tags && tags.length ? (
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
            ) : null}
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
        location = {post.frontmatter.location}
        date = {post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Product">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="image"
              content={`${post.frontmatter.image}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
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
        image {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              src
            }
          }
        }
        location
        tags
      }
    }
  }
`
