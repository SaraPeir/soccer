import React, { Component } from 'react';
import './MatchCard.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';



class MatchCard extends Component {
  render() {

    return (
        <div class="match-card-container">
          <div class="date-container">
            {this.props.matchday}
          </div>

          <div class="teams-container">
            <p>{this.props.homeTeam} - {this.props.awayTeam}</p>
          </div>

          <div class="scores-container">
           <p>{this.props.homeScore} - {this.props.awayScore}</p>
          </div>

        </div>
      );
    }
  }

export default MatchCard;
