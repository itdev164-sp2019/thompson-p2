import React, { Component } from 'react'
import {IconButton, Pre, Section, FileInput} from '../Element/'
import parse from 'html-react-parser';
import { CompareArrows, ThumbUp } from 'styled-icons/material'
import { Paste } from 'styled-icons/fa-solid'
import {codeAssignment1} from '../../textDoc/textDoc'






export class Container extends Component {


    constructor(props) {
      super(props)

      this.state = {
        string1: parse(`${this.replaceCode(codeAssignment1)}`),
        string1Holder: codeAssignment1,
        string2: "",
        originalString: "",
        theyMatch: false
      }


    }

    replaceCode = (arg1) => {

      return arg1.replace(new RegExp('\\[', 'g'), '\[').replace("[^\\]`", "\\`").replace("[^\\]$", "\\$").replace(/</g,"&lt").replace(/>/g,"&gt")
    }

    returnCode = (arg1) => {

      return arg1.replace(/&lt/g,"<").replace(/&gt/g,">")
    }

    

    clearSpanFormating = (event) => {
      let string1t = ""

      string1t = this.state.string1Holder
      string1t = string1t.replace(/(<mark>)/g, "").replace(/(<\/mark>)/g,"")
      string1t = this.replaceCode(string1t)
      

      this.setState({
        string1: parse(`${string1t}`),
        string1Holder: this.returnCode(string1t),
        string2: event.target.innerText,
        theyMatch: false
      })

    }

    setForamtting = ()=>{
      
      let string1ToArray = this.replaceCode(this.state.string1Holder).split("\n");
      let string2ToArray = this.state.string2.replace(new RegExp('\\[', 'g'), '\[').split("\n");
      let string1t = ""
      let theyMatchHolder = true

      let string1ToArrayModified = string1ToArray.filter(v=>v!=='');
      let string2ToArrayModified = string2ToArray.filter(v=>v!=='');

      

      for(let i = 0; i < string1ToArrayModified.length; i++){


        if(string2ToArrayModified.length-1 < i){
          string1ToArrayModified[i] = "<mark>"+string1ToArrayModified[i]+"</mark>"
          theyMatchHolder = false
        }else{

        var stringA = string2ToArrayModified[i]
        var stringB = this.returnCode(string1ToArrayModified[i])

        var stringA1 = stringA.replace(/\s/g, "").replace(/\t/g, "")
        var stringB1 = stringB.replace(/\s/g, "").replace(/\t/g, "")
        

        if(string2ToArrayModified.length < i || stringA1 !== stringB1){
          string1ToArrayModified[i] = "<mark>"+string1ToArrayModified[i]+"</mark>"
          theyMatchHolder = false
        }
      }

      }


      for(let j = 0; j < string1ToArray.length; j++){


        
        if(string1ToArray[j] === ""){
          string1t = string1t + (j < string1ToArray.length-1 ? "\n" : "")
        }else{

        for(let k = 0; k < string1ToArrayModified.length; k++){
          if(string1ToArrayModified[k].replace(/(<mark>)/g, "").replace(/(<\/mark>)/g,"") === string1ToArray[j]){
            string1t = string1t + string1ToArrayModified[k] + (k < string1ToArrayModified.length-1 ? "\n" : "")
            string1ToArrayModified[k] = ""
            break;
          }
        }
      }
      
      }

      this.setState({
        string1: parse(`${string1t}`),
        string1Holder: string1t,
        theyMatch: theyMatchHolder
      })

    }

    updateString = (arg1) => {
      this.setState( {
        string1: parse(`${this.replaceCode(arg1.replace(new RegExp('\\[', 'g'), '\[').replace(/(`)/g, "\`").replace(/(\$)/g, "\$").replace(/\t/g, "").replace(/  +/g, ' ').replace(/\r\n/g, "\n"))}`),
        string1Holder: arg1.replace(new RegExp('\\[', 'g'), '\[').replace(/(`)/g, "\`").replace(/(\$)/g, "\$").replace(/\t/g, "").replace(/  +/g, ' ').replace(/\r\n/g, "\n"),
        string2: ""
      })
      console.log(this.state.string1)
    }



      render() {
        return (
          <div>
            <Section flex justifyContent="space-evenly" m={1}>
                <Pre  variant="primary" editable={false} fromWhich={0} onChangeHandler={null}><>{this.state.string1}</></Pre>
                <Pre  variant="primary" editable={true} onChangeHandler={this.clearSpanFormating}></Pre>
            </Section>

            <FileInput handleUpdatesString={(arg1)=>this.updateString(arg1)}/>
          
            <IconButton handlePress={this.setForamtting} border variant="primary" theymatch={this.state.theyMatch} icon={this.state.theyMatch ? <ThumbUp /> : <CompareArrows />}  style={{margin:'20 auto',  display:'block'}}/> 
          </div>
        )
      }
  }

export default Container