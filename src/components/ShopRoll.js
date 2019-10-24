import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import './main.css'
import DivOverlay from '../templates/DivOverlay'
import {
  renderHtmlToReact,
  useMedia,
  imagesFromAst,
  relayout,
  useWindowSize,

} from '../components/utils'


const ShopRoll = ({data}) => {

const [activeProduct, setActiveProduct] = useState({})
const [showProductDetail, setShowProductDetail] = useState(false);

const [divStyle, setDivStyle] = useState()
const [isMobile, setIsMobile] = useState(match)
const size = useWindowSize();
const match = useMedia("(max-width: 900px) ");


  

  const renderImg = (product) => {
    console.log('product:', product)
    if ( imagesFromAst(product.htmlAst)[0].properties.src){
      setDivStyle({backgroundImage: `url( ${imagesFromAst(product.htmlAst)[0].properties.src} )`})
    }
  }

  useEffect(() => {
    if (match) {
      setDivStyle({backgroundColor: 'white'})
      setIsMobile(true)
    } else {
      setDivStyle({backgroundColor: 'black'})
      setIsMobile(false)      
    }
  }, [])

  const removeImg = () => {
    if (size.width < 900) {
      setDivStyle({backgroundColor: 'white'})
    } else {
      setDivStyle({backgroundColor: 'black'})
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', relayout)
    return () => {
      window.removeEventListener('scroll', relayout)
    };
  }, [])

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

  return (
    <>
    <DivOverlay currImg={divStyle}/>
    <div className="wrapper">
      <div className="article-list">
        {products &&
          products.map(({ node: product }) => (
            <div 
              key={product.id}
              onPointerEnter = {() => renderImg(product)}
              onPointerLeave = {() => removeImg() }
            >
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
          <p className="article-ID">{activeProduct.frontmatter.warehouseID}</p>

          <h2 className="article-detail-title">
            {activeProduct.frontmatter.title}
          </h2>

          <section className='content'>{renderHtmlToReact(activeProduct.htmlAst)}</section>
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
              htmlAst
              id
              fields {
                slug
              }
              frontmatter {
                warehouseID
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

