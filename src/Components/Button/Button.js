import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Button extends Component{
    render(){
        return(
            <button className={"button " + (this.props.inputIcon ? 'button--icon' : false)}>
                { this.props.inputIcon ? <FontAwesomeIcon icon={this.props.inputIcon} /> : false }
                { this.props.text }
            </button>
        )
    }
}