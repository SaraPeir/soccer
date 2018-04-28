import React, { Component } from 'react';
import './Select.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

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
<select value = {this.props.selectedValue} onChange = {this.props.onChangeSelectTeam}>
<option value={'Todos los equipos'}>Todos los equipos</option>
{options}
</select>
</div>
}
}
}

  render() {
    return (
        <div>
{this.createSelect()}
        </div>
      );
    }
  }

export default Select;
