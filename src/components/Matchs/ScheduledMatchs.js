import React, { Component } from 'react';
import './ScheduledMatchs.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ButtonsContainer from './ButtonsContainer';
import MatchCard from './MatchCard';


class ScheduledMatchs extends Component {

  render() {
    return (
      <div class="scheduled-matchs-box">
      <ButtonsContainer />
        <div class="scheduled-cards-container">
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </div>
      </div>
    );
  }
}

export default ScheduledMatchs;
