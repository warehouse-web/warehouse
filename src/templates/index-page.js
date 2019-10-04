
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import EventRoll from '../components/EventRoll';
import Img from 'gatsby-image'


export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <h3 className="has-text-weight-semibold is-size-2">
      All Events
    </h3>
    <EventRoll />
    <div className="column is-12 has-text-centered">
      <Link className="btn" to="/events">
        Read more
      </Link>
    </div>
  </div>
)

  IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}





export const IndexPage = ({ data }) => {
  const {edges: posts} = data.allMarkdownRemark
  const [activeEvent, setActiveEvent] = useState({});
  const [showEventDetail, setShowEventDetail] = useState(false)

  const openEvent = (event) => {
    window.history.pushState(
      {page:1},
      event.frontmatter.title,
      `?event=${event.frontmatter.title}`
    );
    setActiveEvent({event})
    setShowEventDetail(true)
  }
  return (
    <Layout>
      <div className="wrapper">
        <div className="article-list">
          {posts &&
            posts.map (({node:post}) => (
              <div key = {post.id}>
                <article
                  onClick={() => openEvent(post)}
                  className={`blog-list-item tile is-child`}
                >
                  <header>
                    <p className="post-meta">
                      <span className="subtitle is-size-5 is-block">
                        {post.frontmatter.date}
                      </span>
                    </p>
                  </header>
                  <p>{post.frontmatter.title}</p>

                </article>
              </div>
            ))}
        </div>
      {showEventDetail && (
        <div className="article-detail">
          <h2 className="article-detail-title">
            {activeEvent.event.frontmatter.title}
          </h2>
          {activeEvent.event.frontmatter.image &&
            <div className="article-image-wrapper">
              <Img
                className="article-detail-image"
                fluid = {activeEvent.event.frontmatter.image.childImageSharp.fluid}
              />
            </div>
          }
          {activeEvent.event.frontmatter.podcastURL &&
            <iframe
              title = {activeEvent.event.id}
              width="100%"
              height="300"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"
              + activeEvent.event.frontmatter.podcastURL
              + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}
            />
          }
          <p className="article-detail-description">
            {activeEvent.event.frontmatter.description}
          </p>
          <p className="article-detail-description">
            {activeEvent.event.frontmatter.body}
          </p>
        </div>
      )}
      </div>

    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}


export default () => (
  <StaticQuery
    query={graphql`
      query AllPostsQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: {
            frontmatter: {
              templateKey: {
                in: [
                  "blog-post",
                  "podcast-page",
                  "product-page",
                ]
              }
            }
          }
          ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                location
                description
                podcastURL
                image {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <IndexPage data={data} count={count} />}
  />
)