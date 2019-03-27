import React, { Component } from 'react'
import {IconButton, Pre, Section, Span, FileInput} from '../Element/'
import { CompareArrows } from 'styled-icons/material'
import {codeAssignment1} from '../../textDoc/textDoc'






export class Container extends Component {


constructor(props) {
  super(props)

  this.state = {
     string1: codeAssignment1,
     string2: "",
     originalString: toString(codeAssignment1)
  }
}

myFunc = () => {
  alert("jj")
}

updateString = (arg1) => {
  this.setState( {
    string1: arg1
  })
}

  render() {
    return (
      <div>
    <Section flex justifyContent="space-evenly" m={1}>
        <Pre variant="primary" editable={false} fromWhich={0} ><>{this.state.string1}</></Pre>
        <Pre variant="primary" editable={true} onChangeHandler={()=>this.myFunc()}></Pre>
    </Section>
        <FileInput handleUpdatesString={(arg1)=>this.updateString(arg1)}/>
        <IconButton variant="primary" icon={<CompareArrows />}  style={{margin:'20 auto',  display:'block'}}/> 
      </div>
    )
  }
}

export default Container
