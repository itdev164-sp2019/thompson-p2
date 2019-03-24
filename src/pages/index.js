import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {IconButton, Section} from '../components/Element'
import { CompareArrows } from 'styled-icons/material'
import {text1w} from '../textDoc/textDoc'



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Section flex justifyContent="space-evenly" m={0}>
    <pre contentEditable = "true"  spellcheck="false">test</pre>
    <pre contentEditable = "true" spellcheck="false" >${text1w}</pre>
    </Section>
    <IconButton variant="primary" icon={<CompareArrows />}  style={{margin:'0 auto',  display:'block'}}/>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    
  </Layout>
)

export default IndexPage
