import React, { Component } from 'react';
import './Input.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Input extends Component{

    state = {
        dataDirty : false
    };


    onInputs = ( e ) => {
        this.setState({
            dataDirty : true
        });
    };

    render(){
        return(
            <div className="input">
                <input onChange={this.onInputs} id={this.props.id} type={this.props.type} data-dirty={this.state.dataDirty} />

                { this.props.inputIcon ? <FontAwesomeIcon icon={this.props.inputIcon} /> : false }

                { this.props.label ? <label className="label-optional">{ this.props.label }</label> : false }

            </div>
        )
    }
}