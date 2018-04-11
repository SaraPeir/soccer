import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Character extends Component{
  constructor(){
    super();
  }

  render(){
    return (
      <div>
      <li>
      <h2>{this.props.name}</h2>
      <img src={this.props.image} alt={this.props.name} width={this.props.width + 'px'} height={this.props.height + 'px'} />
      <img src={/Images/ + this.props.house + '.jpg'} alt={this.props.house} width = '50px' className = {this.props.classHidden}/>
      <h1>{this.props.isAlive}</h1>
      </li>
      </div>
    )
  }
}

Character.PropTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  house: PropTypes.string.isRequired,
  isAlive: PropTypes.bool.isRequired,
  classHidden: PropTypes.string.isRequired
}


export default Character;
