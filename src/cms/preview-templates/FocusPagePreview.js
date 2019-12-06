import React from 'react'
import PropTypes from 'prop-types'
import { FocusPageTemplate } from '../../templates/focus-page'

const FocusPagePreview = ({ entry, widgetFor }) => (

  <FocusPageTemplate
    warehouseID={entry.getIn(['data', 'warehouseID'])}
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

FocusPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FocusPagePreview
