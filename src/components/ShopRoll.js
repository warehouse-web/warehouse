import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'


class ShopRoll extends React.Component {

  state = {
    activeProduct: {},
    showProducttDetail: false,
  }

  openProduct = (product) => {
    product &&
    window.history.pushState(
      {page: 1},
      product.frontmatter.title,
      `?product=${product.frontmatter.title}`
    );
      this.setState(
        {
          activeProduct: product,
          showProductDetail: true,
        }
      );
  }

  render() {
    const { data } = this.props
    const { edges: products } = data.allMarkdownRemark
    return (
      <div className="wrapper">
        <div className="article-list">
          {products &&
            products.map(({ node: product }) => (
              <div key={product.id}>
                <article
                  onClick={() => this.openProduct(product)}
                  className={`blog-list-item post`}
                >
                  <h1>Product</h1>
                  <header>
                    <p className="post-meta">
                      {product.frontmatter.title}
                      {/* <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link> */}

                    </p>
                  </header>

                </article>
              </div>
            ))}
            {/* { products === null && 
              <h1>No Products To Show ... Yet</h1>
            } */}
      </div>

      {this.state.showProductDetail && (
          <div className="article-detail">
            <h2 className="article-detail-title">{this.state.activeProduct.frontmatter.title}</h2>
            {this.state.activeProduct.frontmatter.image &&
              <div className="article-image-wrapper">
                <Img className ="article-detail-image" fluid={this.state.activeProduct.frontmatter.image.childImageSharp.fluid} />
              </div>
            }
            <p className="post-detail-description">{this.state.activeProduct.frontmatter.description}</p>
            <p className="post-detail-description">{this.state.activeProduct.frontmatter.body}</p>
          </div>
      )}
      </div>
    )
  }
}

ShopRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ShopRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "product-page" } } }
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
    render={(data, count) => <ShopRoll data={data} count={count} />}
  />
)

