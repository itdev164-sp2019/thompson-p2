import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {Container} from '../components/Container';



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container/>    
  </Layout>
)

export default IndexPage
