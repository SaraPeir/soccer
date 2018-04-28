import React, { Component } from 'react';
import './MatchsDay.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ButtonsContainer from './ButtonsContainer';
import MatchCard from './MatchCard';


class MatchsDay extends Component {



  daysRecoveryMatch(){
var dayMatch = '';
 if(this.props.matchsDaysList !== undefined){
   let length = this.props.matchsDaysList.length;
   if(length > 0) {
 for (let i = this.props.start; i < this.props.end; i++){
dayMatch = `Jornada ${this.props.matchsDaysList[0][1].fixtures[i].matchday} - Recupero partidos`
 }
return dayMatch;
 }
 }
 }


   daysRecoveryCards(){
var array = [];
  if(this.props.matchsDaysList !== undefined){
    let length = this.props.matchsDaysList.length;
    if(length > 0) {
  for (let i = this.props.start; i < this.props.end; i++){

  array.push(<MatchCard
  matchday = {this.props.matchsDaysList[0][1].fixtures[i].matchday}
  homeTeam = {this.props.matchsDaysList[0][1].fixtures[i].homeTeamName}
  awayTeam = {this.props.matchsDaysList[0][1].fixtures[i].awayTeamName}
  homeScore = {this.props.matchsDaysList[0][1].fixtures[i].result.goalsHomeTeam}
  awayScore = {this.props.matchsDaysList[0][1].fixtures[i].result.goalsAwayTeam}
  />);
  }
return array;
  }
  }
  }


  render() {
let matchList = this.props.matchsDaysListArray;
let matchDayNumber = 'Hola';
let dayNumber = this.props.dayNumber;
let dayMatch = this.props.start;
    return (
      <div className ="scheduled-cards-whole-container">
      <div className ="title-container">
      <h1>{this.daysRecoveryMatch()}</h1>
      </div>
      <div className="scheduled-cards-container">
    {this.daysRecoveryCards()}
      </div>
      </div>
    );
  }
}

export default MatchsDay;
