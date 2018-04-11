import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends Component{
  constructor(){
    super();
    this.onUpdateText = this.onUpdateText.bind(this);
  }

  onUpdateText(event){
    this.props.onHandleUpdateText(event);
  }

  render(){
    return (
      <input type="text" onChange={this.onUpdateText} value={this.props.inputValue} />
    )
  }
}

Input.PropTypes = {
  onHandleUpdateText: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired
}

export default Input;
