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
width:100px;
width: 45%;
max-height: 95vh;
`

// ${props => props.theme.variants.button[props.variant || 'primary']};

export const Pre = ({children, editable, ...props}) => (
<StyledPre contentEditable={editable}   {...props}>
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