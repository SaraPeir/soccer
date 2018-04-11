import React, { Component } from 'react';
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import SerieATableBox from './SerieATableBox';
import SerieATableTeam from './SerieATableTeam';


class SerieATableTitle extends Component {

  render() {
          return (
            <div>
            <h1>Serie A</h1>
            <h2>posiciones - match day #3</h2>
            </div>
          );
        }
      }

export default SerieATableTitle;
