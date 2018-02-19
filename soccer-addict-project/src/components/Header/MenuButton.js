import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

const MenuButton = styled.div`
color: ${colors.light};
font-size: 40px;
background: ${colors.primary};
text-align: center;
width: 20%;
line-height: 20vh;
height: 100%;
border: 1px solid ${colors.light};
`;


export default MenuButton;
