import React from 'react'

import Layout from '../../components/Layout'
import EventRoll from '../../components/EventRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <EventRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
