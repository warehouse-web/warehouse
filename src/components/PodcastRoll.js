import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import './main.css'
import Img from 'gatsby-image'
import DivOverlay from '../templates/DivOverlay'
import Content, { HTMLContent, useMedia } from '../components/utils'



const PodcastRoll = ({data}) => {
  const [activePodcast, setActivePodcast] = useState({})
  const [showPodcastDetail,setShowPodcastDetail] = useState(false)

  const openPodcast = (podcast) => {
    podcast &&
    window.history.pushState(
      {page: 1},
      podcast.frontmatter.title,
      `?podcast=${podcast.frontmatter.title}`
    );
    if (podcast !== !!activePodcast) {
      setActivePodcast(podcast)
      setShowPodcastDetail(true);
      }
    }

    const PostContent = HTMLContent || Content
    const match = useMedia("(max-width: 900px) ");
    const { edges: posts } = data.allMarkdownRemark

    return (
    <>
    <DivOverlay />
    <div className="wrapper">
      <div className="article-list">
        {posts &&
          posts.map(({ node: post }) => (
            <div key={post.id}>
              <article
                onClick={() => openPodcast(post)}
                className={`blog-list-item post`}
              >
                <h2 className='post-type'>Podcast</h2>
                <header>
                  <p className="post-meta">
                      {post.frontmatter.title}
                    <span className="subtitle is-size-5 is-block">
                      {/* {post.frontmatter.date} */}
                  {/* <Link
                      className="title has-text-primary is-size-4"
                      to={post.fields.slug}
                    >
                  </Link> */}
                    </span>
                      {post.frontmatter.location}
                  </p>
                </header>

              </article>
            </div>
          ))}
          { !posts &&
            <h1>No Podcasts To Show ... Yet</h1>
          }
    </div>
    {showPodcastDetail && (
        <div className={`article-detail ${match ? `mobile` : ``}`}>
            <div className='close' onClick={() => setShowPodcastDetail(false)}>
              <span></span>
              <span></span>
            </div>
          <p className="article-ID">{activePodcast.frontmatter.warehouseID}</p>
          <h2 className="article-detail-title">{activePodcast.frontmatter.title}</h2>

          {<PostContent className = 'content' content={activePodcast.html} />}

          {activePodcast.excerpt}
          <iframe title={activePodcast.id} width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src={"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + activePodcast.frontmatter.podcastURL + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"}/>
        </div>
      )}
    </div>
    </>
  )
}


PodcastRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PodcastRollQuerry {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "podcast-page" } } }
        ) {
          edges {
            node {
              id
              html
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                location
                podcastURL
                warehouseID
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <PodcastRoll data={data} count={count} />}
  />
)

