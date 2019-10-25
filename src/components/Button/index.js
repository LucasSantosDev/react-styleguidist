import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Button Component
 * @version 1.0
 * @author Lucas Dev
 * @description Botão simples de click
 */
export default class Button extends Component {
    static propTypes = {
        /** Color of button */
        color: PropTypes.string,
        /** Text of button */
        text: PropTypes.string,
        /** Size of button */
        size: PropTypes.oneOf(['small', 'medium'])
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <button type="button">Click me!</button>
        )
    }
}
