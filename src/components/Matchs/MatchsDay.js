import React, { Component } from 'react';
import './MatchsDay.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ButtonsContainer from './ButtonsContainer';
import MatchCard from './MatchCard';


class MatchsDay extends Component {



  daysMatch(){
var dayMatch = '';
 if(this.props.matchsDaysList !== undefined){
   let length = this.props.matchsDaysList.length;
   if(length > 0) {
 for (let i = this.props.start; i < this.props.end; i++){
dayMatch = `Jornada #${this.props.matchsDaysList[0][1].fixtures[i].matchday}`
 }
return dayMatch;
 }
 }
 }


   daysCards(){
var array = [];
let exactDate = '';
  if(this.props.matchsDaysList !== undefined){
    let length = this.props.matchsDaysList.length;
    if(length > 0) {
  for (let i = this.props.start; i < this.props.end; i++){

    if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-08-19')){
    exactDate = '19-08-2017';
    } else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-08-20')){
exactDate = '20-08-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-08-26')){
exactDate = '26-08-2017';
}else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-08-27')){
exactDate = '27-08-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-09-09')){
exactDate = '09-09-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-09-10')){
exactDate = '10-09-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-09-16')){
exactDate = '16-09-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-09-17')){
exactDate = '17-09-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-09-19')){
exactDate = '19-09-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-09-20')){
exactDate = '20-09-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-09-23')){
exactDate = '23-09-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-09-24')){
exactDate = '24-09-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-09-30')){
exactDate = '30-09-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-10-01')){
exactDate = '01-10-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-10-14')){
exactDate = '14-10-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-10-15')){
exactDate = '15-10-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-10-16')){
exactDate = '16-10-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-10-21')){
exactDate = '21-10-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-10-22')){
exactDate = '22-10-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-10-24')){
exactDate = '24-10-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-10-25')){
exactDate = '25-10-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-10-28')){
exactDate = '28-10-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-10-29')){
exactDate = '29-10-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-11-04')){
exactDate = '04-11-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-11-05')){
exactDate = '05-11-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-11-18')){
exactDate = '18-11-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-11-19')){
exactDate = '19-11-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-11-20')){
exactDate = '20-11-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-11-25')){
exactDate = '25-11-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-11-26')){
exactDate = '26-11-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-11-27')){
exactDate = '27-11-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-01')){
exactDate = '01-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-02')){
exactDate = '02-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-03')){
exactDate = '03-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-04')){
exactDate = '04-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-09')){
exactDate = '09-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-10')){
exactDate = '10-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-11')){
exactDate = '11-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-12')){
exactDate = '12-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-16')){
exactDate = '16-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-17')){
exactDate = '17-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-22')){
exactDate = '22-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-23')){
exactDate = '23-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-29')){
exactDate = '29-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2017-12-30')){
exactDate = '30-12-2017';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-01-05')){
exactDate = '05-01-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-01-06')){
exactDate = '06-01-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-01-21')){
exactDate = '21-01-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-01-22')){
exactDate = '22-01-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-01-24')){
exactDate = '24-01-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-01-27')){
exactDate = '27-01-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-01-28')){
exactDate = '28-01-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-03')){
exactDate = '03-02-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-04')){
exactDate = '04-02-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-05')){
exactDate = '05-02-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-09')){
exactDate = '09-02-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-10')){
exactDate = '10-02-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-11')){
exactDate = '11-02-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-17')){
exactDate = '17-02-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-18')){
exactDate = '18-02-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-19')){
exactDate = '19-02-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-24')){
exactDate = '24-02-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-25')){
exactDate = '25-02-2018';
} else if(this.props.matchsDaysList[0][1].fixtures[i].date.includes('2018-02-26')){
exactDate = '26-02-2018';
}

// if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-22T13:00:00Z'){
// exactDate = '22-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-23T18:45:00Z'){
// exactDate = '23-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-17T18:45:00Z'){
// exactDate = '17-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-18T18:45:00Z'){
// exactDate = '18-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-18T16:00:00Z'){
// exactDate = '18-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-14T13:00:00Z'){
// exactDate = '14-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-14T16:00:00Z'){
// exactDate = '14-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-14T18:45:00Z'){
// exactDate = '14-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-15T10:30:00Z'){
// exactDate = '15-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-15T13:00:00Z'){
// exactDate = '15-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-15T16:00:00Z'){
// exactDate = '15-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-15T18:45:00Z'){
// exactDate = '15-04-2018';
// } else if(this.props.matchsDaysList[0][1].fixtures[i].date == '2018-04-07T13:00:00Z'){
// exactDate = '07-04-2018';
// }

// 2018-04-07T16:00:00Z
// 2018-04-07T18:45:00Z
// 2018-04-08T10:30:00Z


  array.push(<MatchCard
  matchday = {this.props.matchsDaysList[0][1].fixtures[i].matchday}
date = {exactDate}
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
      <h1>{this.daysMatch()}</h1>
      </div>
      <div className="scheduled-cards-container">
    {this.daysCards()}
      </div>
      </div>
    );
  }
}

export default MatchsDay;
