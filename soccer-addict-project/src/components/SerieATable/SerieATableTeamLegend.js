import React, { Component } from 'react';
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import SerieATeamTableContainerLegend from './SerieATeamTableContainerLegend';
import SerieATeamTableDataLegend from './SerieATeamTableDataLegend';


class SerieATableTeamLegend extends Component {

  render() {
    return (
      <SerieATeamTableContainerLegend>
      <SerieATeamTableDataLegend>
      <strong>Posicion</strong>
      </SerieATeamTableDataLegend>
      <SerieATeamTableDataLegend>
      <strong>Equipo</strong>
      </SerieATeamTableDataLegend>
      <SerieATeamTableDataLegend>
      <strong>Puntos</strong>
      </SerieATeamTableDataLegend>
      </SerieATeamTableContainerLegend>
    );
  }
}

export default SerieATableTeamLegend;
