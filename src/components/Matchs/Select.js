import React, { Component } from 'react';
import './Select.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

//Hay que poner un map con cada nombre de equipos. Adémas hay que poner un Link con el nombre an ${...} , oppure:
//if select.value ==="Napoli"{
//data.name[2]...
//asique pones un solo componente que asume mas que un valor a seconda del valor del select
//}

class Select extends Component {
  constructor(props) {
  super(props);
this.createSelect = this.createSelect.bind(this);
  }



createSelect(){
if(this.props.teamsArray !== undefined){
if(this.props.teamsArray[0] !== undefined && this.props.teamsArray[0].length > 1){
let teamsInternalArray = this.props.teamsArray[0][0].standing;

let options = teamsInternalArray.map((team, index) =>
{return <option key={index} value={team.teamName}>{team.teamName}</option>});
return <div class="select-container">
<select>
<option value={'Selecciona un equipo'}>Selecciona un equipo</option>
{options}
</select>
</div>
}
}

}

//{this.createSelect()}

  render() {
    return (
        <div>
{this.createSelect()}
        </div>
      );
    }
  }

export default Select;
