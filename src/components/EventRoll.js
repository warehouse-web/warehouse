import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'
import {isDateBeforeToday} from '../templates/index-page'
import DivOverlay from '../templates/DivOverlay'
import Content, { HTMLContent } from '../components/Content'


class EventRoll extends React.Component {

  state = {
    activeEvent: {},
    showEventDetail: false,
  }

  openEvent = (event) => {
    event && window.history.pushState( {page: 1}, event.frontmatter.title, event.fields.slug)
      this.setState(
        {
          activeEvent: event,
          showEventDetail: true,
        }
      );

  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    const PostContent = HTMLContent || Content


    return (
      <>
      <DivOverlay/>
      <div className="wrapper">
        <div className="article-list">
          {posts &&
            posts.map(({ node: post }) => (
              <div key={post.id}>
                <article
                  onClick={() => this.openEvent(post)}
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
                    <p className="post-meta">
                      {/* <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                    </Link> */}
                    {post.frontmatter.title}
                      <span className="is-block">
                        {post.frontmatter.date}
                      </span>
                        {post.frontmatter.location}
                    </p>
                  </header>

                </article>
              </div>
            ))}
            {/* { !posts &&
              <h1>No Events To Show ... Yet</h1>
            } */}
      </div>

      {this.state.showEventDetail && (
          <div className="article-detail">
            {/* Close Button */}
            <div className='close'
              onClick={() => this.setState({showEventDetail: false})}
              >
                <span></span>
                <span></span>
            </div>
            <h2 className="article-detail-title">{this.state.activeEvent.frontmatter.title}</h2>
            {<PostContent className = 'content' content={this.state.activeEvent.html} />}

            {this.state.activeEvent.frontmatter.image &&
              <div className="article-image-wrapper">
                <Img className ="article-detail-image" fluid={this.state.activeEvent.frontmatter.image.childImageSharp.fluid} />
              </div>
            }
            <p className="article-detail-description">{this.state.activeEvent.frontmatter.description}</p>
          </div>
      )}
      </div>
      </>
    )
  }
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
      query BlogRollQuery {
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
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                location
                description
                image {
                  childImageSharp {
                    fluid(maxWidth: 620, quality: 100) {
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
    render={(data, count) => <EventRoll data={data} count={count} />}
  />
)

