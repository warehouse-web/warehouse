import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import '../components/main.css'

export const EventPostTemplate = ({
  content,
  contentComponent,
  location,
  date,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  console.log('content:', content)
  console.log('date is it needed', date)

  return (
    <div className="event-detail">
      {helmet || ''}
            <h2 style={{
              textAlign:'center',
              fontSize: '2em',
              marginBottom: '.7em',
              marginTop: '3rem',
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
            {location && (
              <p>{location}</p>
            )}
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

EventPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const EventPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EventPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        location = {post.frontmatter.location}
        date = {post.frontmatter.date}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

EventPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default EventPost

export const pageQuery = graphql`
  query EventPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        location
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`
