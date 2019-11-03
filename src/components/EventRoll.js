import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'
import DivOverlay from '../templates/DivOverlay'
import Content, { HTMLContent, isDateBeforeToday, useMedia } from './utils'


const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});


const EventRoll = ({data}) => {

  const [activeEvent, setActiveEvent] = useState(false)
  const [showEventDetail, setShowEventDetail] = useState(false)

  const openEvent = (event) => {
    event && window.history.pushState( {page: 1}, event.frontmatter.title, event.fields.slug)

    setActiveEvent(event)
    setShowEventDetail(true)
  }


  const { edges: posts } = data.allMarkdownRemark
  const PostContent = HTMLContent || Content
  const match = useMedia("(max-width: 900px) ");



  return (
    <>
    <DivOverlay/>
    <div className="wrapper">
      <div className="article-list">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <article
                onClick={() => openEvent(post)}
                className={`blog-list-item post`}
              >
                {post.frontmatter.date &&
                  isDateBeforeToday(post) &&
                    <h2 className='post-type'>Past Event</h2>
                }
                {post.frontmatter.date &&
                  !isDateBeforeToday(post) &&
                    <h2 className='post-type'>Upcoming Event</h2>
                }
                <header>

                    {/* <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                  </Link> */}
                  <h1>{post.frontmatter.title}</h1>
                  <h2 className="post-meta">
                        {post.frontmatter.date}
                  </h2>
                  {post.frontmatter.location &&
                    <h2>{post.frontmatter.location}</h2>
                  }

                </header>

              </article>
            </div>
          ))}

    </div>

    {showEventDetail && (
      <div className={`article-detail ${match ? `mobile` : ``}`}>
          <div className='close'
            onClick={() => setShowEventDetail(false)}
            >
              <span></span>
              <span></span>
          </div>
          <p className="article-ID">{activeEvent.frontmatter.warehouseID}</p>
          <h2 className="article-detail-title">{activeEvent.frontmatter.title}</h2>
          {<PostContent className = 'content' content={activeEvent.html} />}
          {activeEvent.frontmatter.image &&
            <div className="article-image-wrapper">
              <Img className ="article-detail-image" fluid={activeEvent.frontmatter.image.childImageSharp.fluid} />
            </div>
          }
        </div>
    )}
    </div>
    </>
  )
}

EventRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query EventRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              html
              id
              fields {
                slug
              }
              frontmatter {
                warehouseID
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                location
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <EventRoll data={data} count={count} />}
  />
)

