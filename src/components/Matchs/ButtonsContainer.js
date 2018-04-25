import React, { Component } from 'react';
import './ButtonsContainer.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';



class ButtonsContainer extends Component {

  render() {
          return (
        <div class="buttons-container">
          <Link to={`/programmed`} style={{ textDecoration: 'none' }}><button type="button" name="button">Partidos programados</button></Link>
          <Link to={`/scheduled`} style={{ textDecoration: 'none' }}><button type="button" name="button">Partidos finalizados</button></Link>
        </div>
        );
      }
    }

export default ButtonsContainer;
