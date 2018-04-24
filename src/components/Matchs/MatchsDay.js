import React, { Component } from 'react';
import './MatchsDay.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ButtonsContainer from './ButtonsContainer';
import MatchCard from './MatchCard';


class MatchsDay extends Component {


 daysCards(){
const matchsList = this.props.matchsDaysList;
let content = '';
if(this.props.matchsDaysList !== undefined){
  let length = this.props.matchsDaysList.length;
  if(length > 0) {
for (let i = this.props.start; i < this.props.end; i++){
 content =
<MatchCard
matchday = {this.props.matchsDaysList[0][1].fixtures[i].matchday}
homeTeam = {this.props.matchsDaysList[0][1].fixtures[i].homeTeamName}
awayTeam = {this.props.matchsDaysList[0][1].fixtures[i].awayTeamName}
homeScore = {this.props.matchsDaysList[0][1].fixtures[i].result.goalsHomeTeam}
awayScore = {this.props.matchsDaysList[0][1].fixtures[i].result.goalsAwayTeam}
/>
}
}

} else {
content = <p> 'No hay resultados'</p>;

}
return  content;
}

  render() {
    return (
      <div className ="scheduled-cards-whole-container">
      <div className ="title-container">
      <h1>Jornada #1</h1>
      </div>
      <div className="scheduled-cards-container">
{this.daysCards()}
      </div>
      </div>
    );
  }
}

export default MatchsDay;
//
