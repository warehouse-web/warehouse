import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'
import DivOverlay from '../templates/DivOverlay'
import {useMedia
} from '../components/utils'


const ShopRoll = ({data}) => {

  const [activeProduct, setActiveProduct] = useState({})
  const [showProductDetail, setShowProductDetail] = useState(false);
  const openProduct = (product) => {
    product &&
    window.history.pushState(
      {page: 1},
      product.frontmatter.title,
      `?product=${product.frontmatter.title}`
    );
    setActiveProduct(product)
    setShowProductDetail(true)
  }

  const { edges: products } = data.allMarkdownRemark
  const match = useMedia("(max-width: 900px) ");

  return (
    <>
    <DivOverlay/>
    <div className="wrapper">
      <div className="article-list">
        {products &&
          products.map(({ node: product }) => (
            <div key={product.id}>
              <article
                onClick={() => openProduct(product)}
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

    {showProductDetail && (
      <div className={`article-detail ${match ? `mobile` : ``}`}>
          {/* Close Button */}
          <div className='close'
            onClick={() => setShowProductDetail(false)}
          >
            <span></span>
            <span></span>
          </div>
          <h2 className="article-detail-title">
            {activeProduct.frontmatter.title}
          </h2>

          <a href={`mailto: buy@wearewarehouse.com?subject=${activeProduct.frontmatter.title}`}>
            Send mail with subject
          </a>

        </div>
    )}
    </div>
    </>
  )
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

