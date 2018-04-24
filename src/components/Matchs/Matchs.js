import React, { Component } from 'react';
import './Matchs.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import ButtonsContainer from './ButtonsContainer';



class Matchs extends Component {

  render() {
    return (
      <div>
        <div class="matchs-box">
          <ButtonsContainer />
            <div class="matchs-internal-box"></div>
        </div>
      </div>
    );
  }
}

export default Matchs;
