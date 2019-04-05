import React, { Component } from 'react'
import {IconButton, Pre, Section, Span, FileInput} from '../Element/'
import parse from 'html-react-parser';
import { CompareArrows, ThumbUp } from 'styled-icons/material'
import { Paste } from 'styled-icons/fa-solid'
import {codeAssignment1} from '../../textDoc/textDoc'






export class Container extends Component {


    constructor(props) {
      super(props)

      this.state = {
        string1: parse(`${codeAssignment1.replace("[^\\]`", "\\`").replace("[^\\]$", "\\$")}`),
        string1Holder: codeAssignment1,
        string2: "",
        originalString: "",
        theyMatch: false
      }

      this.thisText = React.createRef()

    }

    

    clearSpanFormating = (event) => {
      let string1t = ""

      string1t = this.state.string1Holder
      string1t = string1t.replace(/(<mark>)/g, "").replace(/(<\/mark>)/g,"")

      this.setState({
        string1: parse(`${string1t}`),
        string1Holder: string1t,
        string2: event.target.innerText,
        theyMatch: false
      })

      //console.log(event.target.textContent)

    }

    setForamtting = ()=>{
      let string1ToArray = this.state.string1Holder.split("\n");
      let string2ToArray = this.state.string2.split("\n");
      let string1t = ""
      let theyMatchHolder = true

      for(let i = 0; i < string1ToArray.length; i++){

        var stringA = string2ToArray[i]
        var stringB = string1ToArray[i]

        
        

        if(string2ToArray.length < i || stringA !== stringB){
          string1ToArray[i] = "<mark>"+string1ToArray[i]+"</mark>"
          theyMatchHolder = false
        }

        string1t = string1t + string1ToArray[i] + (i< string1ToArray.length-1 ? "\n" : "")

      }



      this.setState({
        string1: parse(`${string1t}`),
        string1Holder: string1t,
        theyMatch: theyMatchHolder
      })

    }

    updateString = (arg1) => {
      this.setState( {
        string1: arg1.replace("[^\\]`", "\\`").replace("[^\\]$", "\\$"),
        string1Holder: arg1.replace("[^\\]`", "\\`").replace("[^\\]$", "\\$")
      })
    }

    updateString1 = () => {
      alert("Non-functional Conditionally styled button alert")
    }


      render() {
        return (
          <div>
        <Section flex justifyContent="space-evenly" m={1}>
            <Pre  variant="primary" editable={false} fromWhich={0} ><>{this.state.string1}</></Pre>
            <Pre className="refrence" ref={this.thisText} variant="primary" editable={true} onChangeHandler={this.clearSpanFormating}></Pre>
        </Section>
        <Section flex justifyContent="left" m={1}>

              <IconButton
              handlePress={()=>this.updateString1()} 
              variant="primary" icon={<Paste />} 
              style={{marginTop: '20px', display:'inline-block'}}/>

              <FileInput handleUpdatesString={(arg1)=>this.updateString(arg1)} style={{display:'inline-block'}}/>
        
        </Section>
            <IconButton handlePress={this.setForamtting} border variant="primary" theymatch={this.state.theyMatch} icon={this.state.theyMatch ? <ThumbUp /> : <CompareArrows />}  style={{margin:'20 auto',  display:'block'}}/> 
          </div>
        )
      }
  }

export default Container
