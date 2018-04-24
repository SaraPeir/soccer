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
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {0} end = {20} />
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {20} end = {70}/>
      </div>
    );
  }
}

export default ScheduledMatchs;
