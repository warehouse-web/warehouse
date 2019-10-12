import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'
import DivOverlay from '../templates/DivOverlay'


class ShopRoll extends React.Component {

  state = {
    activeProduct: {},
    showProductDetail: false,
  }

  openProduct = (product) => {
    console.log('called in here')
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
      <>
      <DivOverlay/>
      {console.log(products)}
      <div className="wrapper">
        <div className="article-list">
          {products &&
            products.map(({ node: product }) => (
              <div key={product.id}>
                <article
                  onClick={() => this.openProduct(product)}
                  className={`blog-list-item post`}
                >
                  <h2 className='post-type'>Shop</h2>
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
      </div>

      {this.state.showProductDetail && (
          <div className="article-detail">
            {/* Close Button */}
            <div className='close'
              onClick={() => this.setState({showProductDetail: false})}
            >
              <span></span>
              <span></span>
            </div>
            <h2 className="article-detail-title">{this.state.activeProduct.frontmatter.title}</h2>
            {this.state.activeProduct.frontmatter.image &&
              <div className="article-image-wrapper">
                <Img className ="article-detail-image" fluid={this.state.activeProduct.frontmatter.image.childImageSharp.fluid} />
              </div>
            }

          </div>
      )}
      </div>
      </>
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
              html
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
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
    render={(data, count) => <ShopRoll data={data} count={count} />}
  />
)

