import React, { Component } from 'react';
import './MatchCard.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';



class MatchCard extends Component {
//const teamsList =  this.props.teamsListData;

// getResult() {  //Hay que ponerlo si no da error antes que lleguen los datos (no ve el array)
//   const matchsList =  this.props.matchsListData;
//   if (teamList !== undefined) {
//     let classifica =  matchsList.map((match, index)=>{
//       return (
//         <div key={index}>
//
//         <SerieATableTeam
//
//           position={positionTeam[0].standing.map((ps, index) => {
//           return <div key={index}>{ps.position}</div>})}
//
//           team={positionTeam[0].standing.map((tm, index) => {
//           return <div key={index}>{tm.teamName}</div>})}
//
//           score={positionTeam[0].standing.map((sc, index) => {
//           return <div key={index}>{sc.points}</div>})}
//           />
//           </div>
//             )})
//             return classifica;
//           }
//           else {
//             return <p> No results </p>
//           }
//         }

  render() {
    return (
        <div class="match-card-container">
          <div class="date-container">
            20 april 2018 - 'h20.45'
          </div>

          <div class="teams-container">
            Napoli - Juve
          </div>

          <div class="scores-container">
            10 - 0
          </div>

        </div>
      );
    }
  }

export default MatchCard;
