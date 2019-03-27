import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledInput = styled.input`
color: blue;
`

export class FileInput extends Component {


   constructor(props) {
     super(props)
   
     this.state = {
        test: "hello"
     }
   }
   
   
   
   handleChosenFile = (e) => {

        let file = e;
        let read = new FileReader();
        read.readAsBinaryString(file);
        
        read.onloadend = () => {
          this.props.handleUpdatesString(read.result);
        }

    };








  render() {
    return (
    <div>
        <StyledInput type='file'
               accept='.txt'
               onChange={e => {this.handleChosenFile(e.target.files[0])}}
               style={{margin:'20px', marginLeft:'100px',  display:'block'}}
        />
    </div>
    )
  }
}

export default FileInput