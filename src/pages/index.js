import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {IconButton, Pre, Section} from '../components/Element'
import { CompareArrows } from 'styled-icons/material'
import {text1w} from '../textDoc/textDoc'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Section flex justifyContent="space-evenly" m={0}>
    <Pre variant="primary" editable={false}>{text1w}</Pre>
    <Pre variant="primary" editable={true}></Pre>
    </Section>
    <IconButton variant="primary" icon={<CompareArrows />}  style={{margin:'0 auto',  display:'block'}}/>    
  </Layout>
)

export default IndexPage
