import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledPre = styled.code`

padding: 8px;
color: ${props => (props.variant === 'primary' ? 'black' : 'white')};
border: solid 2px ${props => (props.variant === 'primary' ? 'black' : 'white')};
white-space: pre;
overflow-y:auto;
overflow-x: auto;
background-color:#ebebeb;
width: 45%;
max-height: 95vh;
`

// ${props => props.theme.variants.button[props.variant || 'primary']};

//let myObject=<>{'Red{}'} <Span >{`apple`} </Span>eaten</>;




export const Pre = ({children, editable, fromWhich, ...props}) => (
<StyledPre contentEditable={editable} onKeyUp={props.onChangeHandler}  {...props}>
  {children}
</StyledPre>
)
//{fromWhich === 0 ? <>{codeAssignment1}</> : children}
Pre.defaultProps = {
    spellCheck: false
  }

Pre.propTypes = {
    variant: PropTypes.string,
    editable: PropTypes.bool
}