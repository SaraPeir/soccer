import React, { Component } from 'react';
import './ToDoMatchs.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ButtonsContainer from './ButtonsContainer';
import MatchsDay from './MatchsDay';
import MatchsDayRecovery from './MatchsDayRecovery';


class ToDoMatchs extends Component {
  render() {
    return (
      <div class="programmed-matchs-box">
      <ButtonsContainer />
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {340} end = {350}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {350} end = {360}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {360} end = {370}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {370} end = {380}/>
      </div>
    );
  }
}

export default ToDoMatchs;
