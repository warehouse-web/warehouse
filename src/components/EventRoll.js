import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class EventRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            
            <div key={post.id}>
            {console.log('post:', post)}
              <Link to={post.fields.slug}>
              <article
                className={`blog-list-item tile is-child`}
              >
                <header>
                  <p className="post-meta">
                    <p>Upcoming Event</p>
                    <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="subtitle is-size-5 is-block">
                      {post.frontmatter.date}
                    </span>
                      {post.frontmatter.location}
                  </p>
                </header>

              </article>
              </Link>
            </div>
          ))}
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



// {post.frontmatter.featuredimage ? (
//   <div className="featured-thumbnail">
//     <PreviewCompatibleImage
//       imageInfo={{
//         image: post.frontmatter.featuredimage,
//         alt: `featured image thumbnail for post ${
//           post.title
//         }`,
//       }}
//     />
//   </div>
// ) : null}