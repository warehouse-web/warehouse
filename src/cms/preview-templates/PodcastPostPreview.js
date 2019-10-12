import React from 'react'
import PropTypes from 'prop-types'
import PodcastPostTemplate from '../../templates/podcast-page'

const PodcastPostPreview = ({ entry, widgetFor }) => (

  <PodcastPostTemplate
    content={widgetFor('body')}
    warehouseID={entry.getIn(['data', 'warehouseID'])}
    podcastURL={entry.getIn(['data', 'podcastURL'])}
    title={entry.getIn(['data', 'title'])}
    // date={entry.getIn(['data', 'date'])}
  />
)

PodcastPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PodcastPostPreview
