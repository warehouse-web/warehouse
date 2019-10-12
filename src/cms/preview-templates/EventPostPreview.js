import React from 'react'
import PropTypes from 'prop-types'
import { EventPostTemplate } from '../../templates/event-post'

const EventPostPreview = ({ entry, widgetFor }) => (

  <EventPostTemplate
    content={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
    location={entry.getIn(['data', 'location'])}
    title={entry.getIn(['data', 'title'])}
    // date={entry.getIn(['data', 'date'])}
  />
)

EventPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventPostPreview
