import React from 'react'
import PropTypes from 'prop-types'
import hastToHyperscript from 'hast-to-hyperscript'

export const renderHtmlToReact = node => {
  return hastToHyperscript(React.createElement, node);
} 

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
