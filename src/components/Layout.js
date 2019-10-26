import React, {useState} from 'react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/Navbar'
import Burger from '../components/Burger/Burger'
import Menu from '../components/Menu/Menu'

import './all.sass'
import './main.css'
import useSiteMetadata from './SiteMetadata'
import { withPrefix } from "gatsby"
import {Link} from 'gatsby'


const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  const [open, setOpen] = useState(false);
  return (
    <div style={{isolation:'isolate'}}>

      <nav className='burger-menu'>
        <Link className='mobile-warehouse' to='/about' >WAREHOUSE</Link>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen}  />
      </nav>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content={`${withPrefix("/")}img/og-image.jpg`} />
      </Helmet>
      <Navbar />

      {/* this isolation property makes the mix-blend-mode work on safari for the magic logo */}
      <div >{children}</div>
    </div>
  )
}

export default TemplateWrapper
