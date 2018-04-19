import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

const MenuButton = styled.div`
color: ${colors.light};
font-size: 40px;

background: ${colors.primary};
text-align: center;
width: 100%;
line-height: 10vh;
height: 100%;
border: 1px solid ${colors.light};
cursor: pointer;
&:hover {
color: ${colors.primary};
background: ${colors.light};
}
`;


export default MenuButton;
