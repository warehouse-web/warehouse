
import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import EventRoll from '../components/EventRoll';
import Img from 'gatsby-image'
import DivOverlay from './DivOverlay';
import Content, { HTMLContent } from '../components/Content'
import getImage from 'get-md-image';



export const IndexPageTemplate = ({data}) => {
  const { allMarkdownRemark: post } = data;

  return (
    <Layout>
      <IndexPage/>
    </Layout>
  )
}

  IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
}

// let initFlexWidthPx = window.innerWidth;
let initFlexWidthPx = 620;
    let shiftRatio = 0.5;

export const relayout = () => {
    setWidth(getPos());
}

const setWidth = (shift) => {
    let element = document.getElementById("magic-logo");

    let newWidth = initFlexWidthPx - shiftRatio * shift;
    let newWidthPx = newWidth + "px";

    element.style.width = newWidthPx;
}

const getPos = () => {

    if(window.pageYOffset!= undefined){
        return window.pageYOffset;
    }
    else{
        let sy,
        d = document,
        r = d.documentElement,
        b = d.body;
        sy= r.scrollTop || b.scrollTop || 0;
        return sy;
    }
}

export const isDateBeforeToday = (post) => {
  let postDate = Date.parse(post.frontmatter.date)
  let currDate = Date.parse(new Date())
  return postDate - currDate < 0
}

export const IndexPage = ({
  data
}) => {
  const {edges: posts} = data.allMarkdownRemark
  const [activeEvent, setActiveEvent] = useState({});
  const [nextImg, setNextImg] = useState(false)
  const [showEventDetail, setShowEventDetail] = useState(false)
  const [divStyle, setDivStyle] = useState()

  const handleHover = () => {
    setNextImg(!nextImg);
  }
  const renderImg = (post) => {
    let img = getImage(post).html
    console.log('img:', img)
    console.log('went into renderImg');
    if ( post.frontmatter.image && post.frontmatter.image.childImageSharp.fluid.src){
      let imgUrl = post.frontmatter.image.childImageSharp.fluid.src
      setDivStyle({backgroundImage: 'url(' + imgUrl + ')'})
    }
  }

  const removeImg = () => {
    setDivStyle({backgroundImage: 'none'})
    console.log('ran')
  }

  useEffect(() => {
    window.addEventListener('scroll', relayout)
    return () => {
      window.removeEventListener('scroll', relayout)
    };
  }, [])

  const openEvent = (event) => {
    window.history.pushState(
      {page:1},
      event.frontmatter.title,
      `?event=${event.frontmatter.title}`
    );
    setActiveEvent({event})
    setShowEventDetail(true)
  }

  const postType = (post) => {
    switch(post.frontmatter.templateKey) {
      case 'blog-post':
        return 'Event';
      case 'podcast-page':
        return 'Podcast';
      case 'product-page':
        return 'Shop';
      default:
        return null;
    }
  }
  const PostContent = HTMLContent || Content

  return (

    <Layout >
      <DivOverlay currImg={divStyle}/>

      <div className="wrapper">
        <div onScroll = {()=> relayout() } className="article-list">
          {posts &&
            posts.map (({node:post}) => {
              return (
                <div
                  key = {post.id}
                  onPointerEnter = {() => renderImg(post)}
                  onPointerLeave = {() => removeImg() }
                >

                  <article
                    onClick={() => openEvent(post)}
                    className={`post`}
                  >
                    {post.frontmatter.date &&
                      post.frontmatter.templateKey === 'blog-post' &&
                      isDateBeforeToday(post) &&
                        <h2 className='post-type'>Past {postType(post)}</h2>
                    }
                    {post.frontmatter.date &&
                      post.frontmatter.templateKey === 'blog-post' &&
                      !isDateBeforeToday(post) &&
                        <h2 className='post-type'>Upcoming {postType(post)}</h2>
                    }
                    {post.frontmatter.templateKey !== 'blog-post' &&
                      <h2 className='post-type'>{postType(post)}</h2>
                    }
                    <h1 className='post-title'>{post.frontmatter.title}</h1>
                    <h2 className="post-meta">
                          {post.frontmatter.date}
                    </h2>
                    {post.frontmatter.location &&
                      <h2>{post.frontmatter.location}</h2>
                    }
                  </article>
                </div>
              )
            })}
        </div>
      {showEventDetail && (

        <div className="article-detail">
          <div className='close'
            onClick={() => setShowEventDetail(false)}
          >
            <span></span>
            <span></span>
          </div>
          {/* <a href='#' className='close'  onClick={() => setShowEventDetail(false)}></a> */}
          <p className="article-ID">{activeEvent.event.frontmatter.warehouseID}</p>
          <h2 className="article-detail-title">
            {activeEvent.event.frontmatter.title}
          </h2>
          {<PostContent className='content' content = {activeEvent.event.html} />}
          {console.log('postContent',PostContent)}

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
                podcastURL
                image {
                  childImageSharp {
                    fluid(maxWidth: 520, quality: 100) {
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