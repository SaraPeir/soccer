import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

export const SerieATableContainerLegend = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 80%;
background: ${colors.primary};
margin-left: auto;
margin-right: auto;
`;

export default SerieATableContainerLegend;
