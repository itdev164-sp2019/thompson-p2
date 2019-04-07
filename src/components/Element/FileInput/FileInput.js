import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Paste } from 'styled-icons/fa-solid'

const StyledInput = styled.input`
color: blue;
cursor:pointer;
display: none;
`
const StyledLable = styled.label`
margin-left: 100px;
&:hover {
 color: #207265;}
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


  render(icon, ...prpos) {
    return (
    <div>
        <StyledLable htmlFor="file-input" aria-hidden="true">
          <i>{<Paste style={{height: "50px"}}/>}</i>
        </StyledLable>
        <StyledInput 
                id="file-input"
                type='file'
               accept='.js,.txt'
               onChange={e => {
                 if(e.target.files[0] != null){
                 this.handleChosenFile(e.target.files[0])
                 }
                }}
               style={{marginTop:'25px' }}
        />
    </div>
    )
  }
}


FileInput.propTypes = {
  handleUpdatesString: PropTypes.func
}

export default FileInput