import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/utils'
import '../components/main.css'

export const BlogPostTemplate = ({
  title,
  content,
  contentComponent,
  location,
  // tags,
  date,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="event-detail">
      {/* {helmet || ''} */}
      <h2 className="article-detail-title">
      </h2>
      {/* {location && (

        <p>Location: {location}</p>
      )} */}
      <p>{date}</p>

      <PostContent content={content} />


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

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,

  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        location = {post.frontmatter.location}
        date = {post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="date"
              content={`${post.frontmatter.date}`}
            />
            <meta
              name="location"
              content={`${post.frontmatter.location}`}
            />
            <meta
              name="image"
              content={`${post.frontmatter.image}`}
            />
          </Helmet>
        }
        // tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        image {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              src
            }
          }
        }
        location
      }
    }
  }
`
