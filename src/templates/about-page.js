import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="about-wrapper">
      {/* <a href='#' className='close'  onClick={() => setShowEventDetail(false)}></a> */}
      {/* <Link activeClassName="active" className='close' to="/" /> */}
      <Link
      className='close'
      id='white'
      to = '/'
            >
              <span className='white'></span>
              <span className='white'></span>
      </Link>

      <div className="about-left">

              <h2 className="about-title">
                {/* {title} */}
                Warehouse <br/> A place for clothes in context
                {/* <br/> */}
                {/* <span className='about-title'>A place for clothes in context</span> */}
                <span className='about-caps'>SHOWS, READS, SHARES, LISTENS, PERFORMS, DOCUMENTS, PRESENTS, EDUCATES, ACTIVATES, MATTERS</span>
              </h2>

              {/* <PageContent className="content" content={content} /> */}
      </div>
      <div className="about-right">
        <p className='about-description'>Warehouse is an Amsterdam-based collective existing of Elisa van Joolen, Femke de Vries and Hanka van der Voet aiming to provide a platform for critical fashion practitioners through organizing exhibitions, reading groups, workshops, performances and book presentations among other things, in order to create an engaging environment that facilitates critical dialogue and the creation of an alternative fashion discourse that goes beyond seeing fashion as a commodity.</p>
        <ul className='colophon'>
          <li>
            CONTACT
            <li>mail@thisiswarehouse.com</li>
          </li>
          <li>
            INSTAGRAM
            <li>@amsterdam.warehouse</li>
          </li>
          <li>
            WEBSITE DESIGN
            <li>Zuzana Kostelanska</li>
          </li>
          <li>
            GRAPHIC DESIGN
            <li>Zuzana Kostelanska</li>
          </li>
          <li>
            ART DIRECTION
            <li>Elisa van Joolen</li>
          </li>
          <li>
            TEXT
            <li>Femke de Vries</li>
            <li>Hanka van der Voet</li>
            <li>Chet Bugter</li>
          </li>
          <li>
            EDITING
            <li>Femke de Vries</li>
            <li>Hanka van der Voet</li>
          </li>
          <li>
            PRODUCTION
            <li>Anouk Beckers</li>
          </li>
          <li>
            COMMUNICATION
            <li>Schoon de Boer</li>
          </li>
        </ul>
        <p className='about-description'>Warehouse is made possible through the financial support of Stimuleringsfonds Creatieve Industrie</p>
        <p className='about-description'>2019 Warehouse</p>
        <p className='about-copyright'>No Rights etc.....</p>
      </div>
    </div>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
