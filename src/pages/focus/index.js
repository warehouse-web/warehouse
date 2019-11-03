import React from 'react'

import Layout from '../../components/Layout'
import FocusRoll from '../../components/FocusRoll'

export default class FocusIndexPage extends React.Component {

  render() {
    return (
      <Layout>
        <FocusRoll location="test"/>
      </Layout>
    )
  }
}
