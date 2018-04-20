import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

export const HeaderBoxLeft = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
width: 50%;
height: 100%;
line-height: 10vh;
color: black;
background: ${colors.primary};
z-index: 100;
`;



export default HeaderBoxLeft;
