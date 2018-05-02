import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

export const HeaderBox = styled.div`
width: 100%;
display: flex;
flex-direction: row;
position: fixed;
height: 10vh;
line-height: 10vh;
color: black;
background: ${colors.primary};
z-index: 100;
@media (max-width: 1000px) {
   height: 20vh;
line-height: 20vh;
 }
`;



export default HeaderBox;
