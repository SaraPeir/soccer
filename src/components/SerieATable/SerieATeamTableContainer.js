import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

export const SerieATableContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 80%;
background: ${colors.light};
margin-left: auto;
margin-right: auto;
border: 1px solid ${colors.black};
`;

export default SerieATableContainer;
