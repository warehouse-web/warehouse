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
  location,
  // tags,
  date,
  title,
  helmet,
  podcastURL,
  warehouseID
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
            <iframe
            width="100%"
            height="300"
            scrolling="no"
            frameborder="no"
            allow="autoplay"
            src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + podcastURL + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
            />
            <PostContent content={content} />
    </div>
  )
}

PodcastTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const Podcast = (data) => {
console.log('data:', data)

  // const { markdownRemark: post } = data

  return (
    <Layout>
      <PodcastTemplate
        content={post.html}
        contentComponent={HTMLContent}
        warehouseID = {post.frontmatter.warehouseID}
        podcastURL = {post.frontmatter.podcastURL}
        date = {post.frontmatter.date}
        helmet={
          <Helmet titleTemplate="%s | Podcast">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="location"
              content={`${post.frontmatter.location}`}
            />
          </Helmet>
        }

        title={post.frontmatter.title}
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

export const podcastQuery = graphql`
  query PodcastByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        warehouseID
        podcastURL
      }
    }
  }
`







        /* <meta
          name="date"
          content={`${post.frontmatter.date}`}
        /> */
        // tags={post.frontmatter.tags}