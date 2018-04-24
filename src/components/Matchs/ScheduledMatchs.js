import React, { Component } from 'react';
import './ScheduledMatchs.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ButtonsContainer from './ButtonsContainer';
import MatchsDay from './MatchsDay';


class ScheduledMatchs extends Component {
  render() {
    return (
      <div class="scheduled-matchs-box">
      <ButtonsContainer />
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {0} end = {9}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {10} end = {19}/>
      </div>
    );
  }
}

export default ScheduledMatchs;
