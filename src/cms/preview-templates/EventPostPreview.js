import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const EventPostPreview = ({ entry, widgetFor }) => (


  <BlogPostTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    location={entry.getIn(['data', 'location'])}
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
  >
    {console.log('entry:', entry)}
    </BlogPostTemplate>
)

EventPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPostPreview
