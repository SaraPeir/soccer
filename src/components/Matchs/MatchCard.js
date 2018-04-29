import React, { Component } from 'react';
import './MatchCard.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';



class MatchCard extends Component {
  render() {

    return (
        <div className="match-card-container">
          <div className="date-container">
<p id="typo1">{this.props.date}</p>
          </div>


          <div className="teams-container">
            <p id="typo2">{this.props.homeTeam} - {this.props.awayTeam}</p>

          </div>

          <div className="scores-container">
<p className="typo3" id = {this.props.specialTypo}>{this.props.status}</p>
           <p id="typo4" className = {this.props.toHide}>{this.props.homeScore} - {this.props.awayScore}</p>
          </div>

        </div>
      );
    }
  }

export default MatchCard;
