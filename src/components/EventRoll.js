import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'

class EventRoll extends React.Component {

  state = {
    activeEvent: {},
    showEventDetail: false,
  }

  openEvent = (event) => {
    event && window.history.pushState( {page: 1}, event.frontmatter.title, `?event=${event.frontmatter.title}`)
      this.setState(
        {
          activeEvent: event,
          showEventDetail: !this.state.showEventDetail,
        }
      );

  }

  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark
    return (
      <div className="wrapper">
        <div className="article-list">
          {posts &&
            posts.map(({ node: post }) => (
              <div key={post.id}>
                <article
                  onClick={() =>this.openEvent(post)}
                  className={`blog-list-item tile is-child`}
                >
                  <header>
                    <p className="post-meta">
                      Upcoming Event
                      {/* <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link> */}
                      <span> &bull; </span>
                      <span className="subtitle is-size-5 is-block">
                        {post.frontmatter.date}
                      </span>
                        {post.frontmatter.location}
                    </p>
                  </header>

                </article>
              </div>
            ))}
      </div>

      {this.state.showEventDetail && (
          <div className="article-detail">
            <h2 className="article-detail-title">{this.state.activeEvent.frontmatter.title}</h2>
            {this.state.activeEvent.frontmatter.image &&
              <div className="article-image-wrapper">
                <Img className ="article-detail-image" fluid={this.state.activeEvent.frontmatter.image.childImageSharp.fluid} />
              </div>
            }
            <p className="article-detail-description">{this.state.activeEvent.frontmatter.description}</p>
            <p className="article-detail-description">{this.state.activeEvent.frontmatter.body}</p>
          </div>
      )}
      </div>
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
    render={(data, count) => <EventRoll data={data} count={count} />}
  />
)

