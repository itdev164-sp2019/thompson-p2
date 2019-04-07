import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'


const StyledPre = styled.p`

padding: 8px;
color: ${props => (props.variant === 'primary' ? 'black' : 'white')};
border: solid 2px ${props => (props.variant === 'primary' ? 'black' : 'white')};
white-space: pre;
overflow-y:auto;
overflow-x: auto;
background-color:#ebebeb;
width: 45%;
max-height: 66vh;
`




export const Pre = ({children, editable, fromWhich, ...props}) => (
<StyledPre contentEditable={editable} onKeyUp={(event) => props.onChangeHandler(event)}  {...props}>
  {children}
</StyledPre>
)

Pre.defaultProps = {
    spellCheck: false
  }

Pre.propTypes = {
    variant: PropTypes.string,
    editable: PropTypes.bool
}