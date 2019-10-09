import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import '../components/main.css'

export const PodcastTemplate = ({
  content,
  contentComponent,
  description,
  location,
  tags,
  date,
  title,
  helmet,
  image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="event-detail">
      {helmet || ''}
            <h2 style={{
              textAlign:'center',
              fontSize:'2em',
              marginBottom: '.7em'
            }} className="post-detail-title">
              {title}
            </h2>
            <div style={{
              display: 'flex',
            }}

            className="post-image-wrapper">
              <img
              alt = ''
              style ={{
                maxWidth: '80%',
                margin: '0 auto',
              }}
               className="post-detail-image" src={image}/>
            </div>
            <p style ={{
              marginTop: '2em',
              textAlign: 'center',
            }}

             className="post-detail-description">{description}</p>
            {location && (

              <p>Location: {location}</p>
            )}
            <p>{date}</p>

            <PostContent content={content} />
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

PodcastTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Podcast = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <PodcastTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        location = {post.frontmatter.location}
        date = {post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Podcast">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="date"
              content={`${post.frontmatter.date}`}
            />
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
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
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        podcastURL = {post.frontmatter.podcastURL}
      />
    </Layout>
  )
}

Podcast.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Podcast

export const pageQuery = graphql`
  query PodcastByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        podcastURL
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
