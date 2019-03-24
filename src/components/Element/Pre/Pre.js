import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledPre = styled.pre`

padding: 8px;
color: ${props => (props.variant === 'primary' ? 'black' : 'white')};
border: solid 2px ${props => (props.variant === 'primary' ? 'black' : 'white')};
min-width:100px;
width: 45%;
`

// ${props => props.theme.variants.button[props.variant || 'primary']};

export const Pre = props => <StyledPre contentEditable={props.editable}   {...props} />

Pre.defaultProps = {
    spellCheck: false
  }

Pre.propTypes = {
    variant: PropTypes.string,
    editable: PropTypes.bool
}