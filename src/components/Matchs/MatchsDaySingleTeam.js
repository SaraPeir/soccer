import React, { Component } from 'react';
import './MatchsDay.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ButtonsContainer from './ButtonsContainer';
import MatchCard from './MatchCard';


class MatchsDaySingleTeam extends Component {

   daysCards(){
var array = [];
if(this.props.matchsList !== undefined){
  let length = this.props.matchsList.length;
  if(length > 0) {
  if(this.props.arrayTeams !== undefined){
  for (let i = 0; i < this.props.arrayTeams.length; i++){
  array.push(<MatchCard
  matchday = {this.props.arrayTeams[i].matchday}
  homeTeam = {this.props.arrayTeams[i].homeTeamName}
  awayTeam = {this.props.arrayTeams[i].awayTeamName}
  homeScore = {this.props.arrayTeams[i].result.goalsHomeTeam}
  awayScore = {this.props.arrayTeams[i].result.goalsAwayTeam}
  />);
  }
return array;
  }
}}
  }


  render() {
    return (
      <div className ="scheduled-cards-whole-container">
      <div className="scheduled-cards-container">
    {this.daysCards()}
      </div>
      </div>
    );
  }
}

export default MatchsDaySingleTeam;
