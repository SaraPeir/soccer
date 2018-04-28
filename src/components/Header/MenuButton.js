import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

const MenuButton = styled.div`
color: ${colors.light};
font-size: 25px;

background: ${colors.primary};
text-align: center;
width: 150px;
line-height: 10vh;
height: 100%;
cursor: pointer;
transition: all 1s ease;
&:hover {
color: ${colors.primary};
background: ${colors.light};
font-size: 32px;
font-weight: bold;
}
`;


export default MenuButton;
