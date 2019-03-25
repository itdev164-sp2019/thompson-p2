import React, { Component } from 'react'
import {IconButton, Pre, Section, Span} from '../Element/'
import { CompareArrows } from 'styled-icons/material'
//import {text1w} from '../../textDoc/textDoc'






export class Container extends Component {


constructor(props) {
  super(props)

  this.state = {
     string1: "",
     string2: ""
  }
}




  render() {
    return (
      <div>
    <Section flex justifyContent="space-evenly" m={1}>
        <Pre variant="primary" editable={false} fromWhich={0} ></Pre>
        <Pre variant="primary" editable={true} ></Pre>
    </Section>
        <IconButton variant="primary" icon={<CompareArrows />}  style={{margin:'20 auto',  display:'block'}}/> 
      </div>
    )
  }
}

export default Container
