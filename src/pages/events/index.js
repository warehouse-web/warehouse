import React from 'react'

import Layout from '../../components/Layout'
import EventRoll from '../../components/EventRoll'

export default class BlogIndexPage extends React.Component {

  render() {
    console.log(this.props);
    return (
      <Layout>
        <EventRoll location="test"/>
      </Layout>
    )
  }
}
