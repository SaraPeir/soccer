import React, { Component } from 'react';
import './MatchCard.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';



class MatchCardSingleTeam extends Component {
  render() {


    return (
        <div class="match-card-container">
          <div class="date-container">
            <p id="typo5">Jornada {this.props.matchday}</p>
<p id="typo1">{this.props.date}</p>
<p className="typo3" id = {this.props.specialTypo}>{this.props.status}</p>
          </div>

          <div class="teams-container">
            <p id="typo2">{this.props.homeTeam} - {this.props.awayTeam}</p>
          </div>

          <div class="scores-container">
           <p id="typo4" className = {this.props.toHide}>{this.props.homeScore} - {this.props.awayScore}</p>
          </div>

        </div>
      );
    }
  }

export default MatchCardSingleTeam;
