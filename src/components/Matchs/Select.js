import React, { Component } from 'react';
import './ButtonsContainer.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

//Hay que poner un map con cada nombre de equipos. Adémas hay que poner un Link con el nombre an ${...} , oppure:
//if select.value ==="Napoli"{
//data.name[2]...
//asique pones un solo componente que asume mas que un valor a seconda del valor del select
//}

class Select extends Component {

  render() {
    return (
        <div class="select-container">
          <Link to={`/finalized`} style={{ textDecoration: 'none' }}><button type="button" name="button">Finalizados</button></Link>
          <Link to={`/scheduled`} style={{ textDecoration: 'none' }}><button type="button" name="button">Scheduled</button></Link>
        </div>
      );
    }
  }

export default Select;
