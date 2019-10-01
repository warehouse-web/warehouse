import React from 'react'

import Layout from '../../components/Layout'
import PodcastRoll from '../../components/PodcastRoll'

export default class PodcastIndexPage extends React.Component {

  render() {
    console.log(this.props);
    return (
      <Layout>
        <PodcastRoll location="test"/>
      </Layout>
    )
  }
}
