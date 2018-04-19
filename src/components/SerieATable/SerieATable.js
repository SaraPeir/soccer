import React, { Component } from 'react';
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import SerieATableBox from './SerieATableBox';
import SerieATableTeam from './SerieATableTeam';
import SerieATableTeamLegend from './SerieATableTeamLegend';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class SerieATable extends Component {
  getResult() {  //Hay que ponerlo si no da error antes que lleguen los datos (no ve el array)
    const list =  this.props.listData;

    if (list !== undefined) {

      let classifica =  list.map((positionTeam, index)=>{
//positionTeam es uno de los dos arrays que se forman dentro el array contenido en listDAta:
//listData = [[positionTeam[0], positionTeam[1]]]
//para verlo mejor, despues del debugger into la consola escribe footballData.length y luego footballData[0].length para darte cuenta de lo que pasó

        return (
          <div key={index}>

            <SerieATableTeam

          position={positionTeam[0].standing.map((ps, index) => {
            return <div key={index}>{ps.position}</div>})}

          team={positionTeam[0].standing.map((tm, index) => {
            return <div key={index}>{tm.teamName}</div>})}

          symbol={positionTeam[0].standing.map((sb, index) => {
            return <div key={index}>{sb.crestURI}</div>})}

          score={positionTeam[0].standing.map((sc, index) => {
            return <div key={index}>{sc.points}</div>})}
            />

            </div>
              )})
              return classifica;
            }
            else {
              return <p> No results </p>
            }
          }

          render() {
            let captionTitle = '';
            let day = '';//se forma un array (data en App) con un otro array dentro con los dos objectps coerentemente con las dos peticiones
            if (this.props.listData !== undefined)  {
              let length = this.props.listData.length;
              if(length > 0) {
                if (this.props.listData[0] !== undefined)  {
                  captionTitle = this.props.listData[0][0].leagueCaption;
                  day = this.props.listData[0][0].matchday;  //position en objecto 0 del array con lenght 2 dentro el array con lenght 1 (por esto, el array con lenght 2 esta en positiion 0)
                }
              }
            }
            return (
              <div>
              <button><Link to={'/'} style={{ textDecoration: 'none' }}>Home </Link></button>
              <SerieATableBox>
              <h1>{captionTitle}</h1>
              <h2>Posiciones - Jornada #{day}</h2>
              <SerieATableTeamLegend />
              {this.getResult()}
              </SerieATableBox>
              </div>
            );
          }
        }

        export default SerieATable;
