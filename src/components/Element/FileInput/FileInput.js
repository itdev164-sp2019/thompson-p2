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
          this.props.handleUpdatesString(read.result.replace("[^\\]`", "\\`").replace("[^\\]$", "\\$"));
        }

    };








  render() {
    return (
    <div>
        <StyledInput type='file'
               accept='.js'
               onChange={e => {
                 if(e.target.files[0] != null){
                 this.handleChosenFile(e.target.files[0])
                 }
                }}
               style={{marginTop:'25px'}}
        />
    </div>
    )
  }
}

FileInput.propTypes = {
  handleUpdatesString: PropTypes.func.isRequired
}

export default FileInput