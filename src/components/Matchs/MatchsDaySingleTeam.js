import React, { Component } from 'react';
import './MatchsDay.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ButtonsContainer from './ButtonsContainer';
import MatchCardSingleTeam from './MatchCardSingleTeam';


class MatchsDaySingleTeam extends Component {

   daysCards(){
var array = [];
if(this.props.matchsList !== undefined){
  let length = this.props.matchsList.length;
  if(length > 0) {
  if(this.props.arrayTeams !== undefined){
  for (let i = 0; i < this.props.arrayTeams.length; i++){

  const status = (this.props.arrayTeams[i].status == 'SCHEDULED')?
              ('PROGRAMADO')
              :  ((this.props.arrayTeams[i].status == 'FINISHED')? 'FINALIZADO' : 'PROXIMO PARTIDO');

const constSpecialTypo = (this.props.arrayTeams[i].status == 'TIMED') ? 'next-match-typo' : '';

const toHideClass = (this.props.arrayTeams[i].status == 'FINISHED') ? '' : 'hidden';

let exactDate = '';

if(this.props.arrayTeams[i].date.includes('2017-08-19')){
exactDate = '19-08-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-08-20')){
exactDate = '20-08-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-08-26')){
exactDate = '26-08-2017';
}else if(this.props.arrayTeams[i].date.includes('2017-08-27')){
exactDate = '27-08-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-09-09')){
exactDate = '09-09-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-09-10')){
exactDate = '10-09-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-09-16')){
exactDate = '16-09-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-09-17')){
exactDate = '17-09-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-09-19')){
exactDate = '19-09-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-09-20')){
exactDate = '20-09-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-09-23')){
exactDate = '23-09-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-09-24')){
exactDate = '24-09-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-09-30')){
exactDate = '30-09-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-10-01')){
exactDate = '01-10-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-10-14')){
exactDate = '14-10-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-10-15')){
exactDate = '15-10-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-10-16')){
exactDate = '16-10-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-10-21')){
exactDate = '21-10-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-10-22')){
exactDate = '22-10-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-10-24')){
exactDate = '24-10-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-10-25')){
exactDate = '25-10-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-10-28')){
exactDate = '28-10-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-10-29')){
exactDate = '29-10-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-11-04')){
exactDate = '04-11-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-11-05')){
exactDate = '05-11-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-11-18')){
exactDate = '18-11-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-11-19')){
exactDate = '19-11-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-11-20')){
exactDate = '20-11-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-11-25')){
exactDate = '25-11-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-11-26')){
exactDate = '26-11-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-11-27')){
exactDate = '27-11-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-01')){
exactDate = '01-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-02')){
exactDate = '02-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-03')){
exactDate = '03-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-04')){
exactDate = '04-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-09')){
exactDate = '09-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-10')){
exactDate = '10-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-11')){
exactDate = '11-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-12')){
exactDate = '12-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-16')){
exactDate = '16-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-17')){
exactDate = '17-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-22')){
exactDate = '22-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-23')){
exactDate = '23-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-29')){
exactDate = '29-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2017-12-30')){
exactDate = '30-12-2017';
} else if(this.props.arrayTeams[i].date.includes('2018-01-05')){
exactDate = '05-01-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-01-06')){
exactDate = '06-01-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-01-21')){
exactDate = '21-01-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-01-22')){
exactDate = '22-01-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-01-24')){
exactDate = '24-01-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-01-27')){
exactDate = '27-01-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-01-28')){
exactDate = '28-01-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-03')){
exactDate = '03-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-04')){
exactDate = '04-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-05')){
exactDate = '05-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-09')){
exactDate = '09-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-10')){
exactDate = '10-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-11')){
exactDate = '11-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-17')){
exactDate = '17-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-18')){
exactDate = '18-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-19')){
exactDate = '19-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-24')){
exactDate = '24-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-25')){
exactDate = '25-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-02-26')){
exactDate = '26-02-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-03-03')){
exactDate = '03-03-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-03-09')){
exactDate = '09-03-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-03-10')){
exactDate = '10-03-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-03-11')){
exactDate = '11-03-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-03-14')){
exactDate = '14-03-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-03-17')){
exactDate = '17-03-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-03-18')){
exactDate = '18-03-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-03-31')){
exactDate = '31-03-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-04-03')){
exactDate = '03-04-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-04-04')){
exactDate = '04-04-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-04-07')){
exactDate = '07-04-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-04-08')){
exactDate = '08-04-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-04-14')){
exactDate = '14-04-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-04-15')){
exactDate = '15-04-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-04-17')){
exactDate = '17-04-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-04-18')){
exactDate = '18-04-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-04-22')){
exactDate = '22-04-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-04-23')){
exactDate = '23-04-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-04-29')){
exactDate = '29-04-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-05-06')){
exactDate = '06-05-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-05-13')){
exactDate = '13-05-2018';
} else if(this.props.arrayTeams[i].date.includes('2018-05-20')){
exactDate = '20-05-2018';
}

  array.push(<MatchCardSingleTeam
status = {status}
specialTypo = {constSpecialTypo}
date = {exactDate}
  matchday = {this.props.arrayTeams[i].matchday}
toHide = {toHideClass}
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
