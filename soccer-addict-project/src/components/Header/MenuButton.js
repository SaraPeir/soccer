import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

const MenuButton = styled.div`
color: ${colors.light};
font-size: 10px;
background: ${colors.primary};
text-align: center;
width: 20%;
line-height: 10vh;
height: 100%;
border: 1px solid ${colors.light};
cursor: pointer;
`;


export default MenuButton;
