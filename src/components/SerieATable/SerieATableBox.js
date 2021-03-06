import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import Image2 from '../../Images/Image2.jpeg';
import FootballBackground from '../../Images/football-background.jpg';

export const SerieATableBox = styled.div`
padding-top: 100px;
padding-bottom: 100px;
width: 100%;
background-image: url(${FootballBackground});
background-position: center;
background-size: cover;
text-align: center;
`;

export default SerieATableBox;
