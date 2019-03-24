import React, { Component } from 'react'
import {IconButton, Pre, Section} from '../Element/'
import { CompareArrows } from 'styled-icons/material'
import {text1w} from '../../textDoc/textDoc'




export class Container extends Component {


constructor(props) {
  super(props)

  this.state = {
     string1: text1w,
     string2: ""
  }
}




  render() {
    return (
      <div>
    <Section flex justifyContent="space-evenly" m={1}>
        <Pre variant="primary" editable={false} >{this.state.string1}</Pre>
        <Pre variant="primary" editable={true} >{this.state.string2}</Pre>
    </Section>
        <IconButton variant="primary" icon={<CompareArrows />}  style={{margin:'0 auto',  display:'block'}}/> 
      </div>
    )
  }
}

export default Container
