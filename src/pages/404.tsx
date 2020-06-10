import React from 'react'

import Layout from '../components/layout/layout'
import SEO from '../components/seo/seo'
import notFound from './img/not-found.svg'
import './404.scss'

const NotFoundPage = () => (
  <Layout className="NotFound">
    <SEO title="404: Not found" />
    <h1>There's nothing here..</h1>
    <img src={notFound} />
    <p>You just hit a route that doesn&#39;t exist...</p>
  </Layout>
)

export default NotFoundPage
