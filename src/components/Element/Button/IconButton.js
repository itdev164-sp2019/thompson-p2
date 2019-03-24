import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {ButtonBase} from './ButtonBase'

const StyledButton = styled(ButtonBase)`
    ${props => props.theme.variants.iconButton[props.variant || 'primary']};
    height: 60px;
    width: 200px;
    margin-bottom: 20px;
    border: 2px solid blue;
    border-radius: 30px;
    &:hover {
        color: blueviolet;
        border: 2px solid blueviolet;};
    `

    export const IconButton = styled(({icon, ...props}) => {
        let clone = React.cloneElement(icon, ...props)
        return <StyledButton as={clone.type} {...props} className={props.className} />
    })``

    

    IconButton.propTypes = {
        icon: PropTypes.node.isRequired,
        variant: PropTypes.string
    }