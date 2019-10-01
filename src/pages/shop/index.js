import React from 'react'
import Layout from '../../components/Layout'
import ShopRoll from '../../components/ShopRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    console.log('went into SHOP')
    return (
      <Layout>
        <ShopRoll location="test"/>
      </Layout>
    )
  }
}
