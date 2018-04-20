import React, { Component } from 'react';
//import './SerieATable.css';
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import SerieATeamTableContainer from './SerieATeamTableContainer';
import SerieATeamTableData from './SerieATeamTableData';
import SerieATableParagraph from './SerieATableParagraph';


class SerieATableTeam extends Component {

  render() {
          return (

            <SerieATeamTableContainer>

            <SerieATeamTableData>
          <p>{this.props.position}</p>
          </SerieATeamTableData>

            <SerieATeamTableData>
          <p>{this.props.team}</p>
          </SerieATeamTableData>

          <SerieATeamTableData>
        <p>{this.props.score}</p>
        </SerieATeamTableData>


            </SerieATeamTableContainer>

          );
        }
      }

export default SerieATableTeam;
