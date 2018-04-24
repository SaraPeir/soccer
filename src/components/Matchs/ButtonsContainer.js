import React, { Component } from 'react';
import './ButtonsContainer.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';



class ButtonsContainer extends Component {

  render() {
          return (
        <div class="buttons-container">
          <Link to={`/finalized`} style={{ textDecoration: 'none' }}><button type="button" name="button">Finalizados</button></Link>
          <Link to={`/scheduled`} style={{ textDecoration: 'none' }}><button type="button" name="button">Scheduled</button></Link>
        </div>
        );
      }
    }

export default ButtonsContainer;
