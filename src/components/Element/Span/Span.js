import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledSpan = styled.text`
color: blue;
white-space: pre;
`



export const Span = ({children, ...props}) => (
<StyledSpan  {...props} >
{children}
</StyledSpan> )

StyledSpan.propTypes = {
    children: PropTypes.node.isRequired
}