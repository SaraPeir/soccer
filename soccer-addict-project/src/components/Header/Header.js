import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

const Header = styled.div`
width: 100%;
display: flex;
flex-direction: row;
height: 20vh;
color: black;
background: ${colors.primary};
`;


export default Header;
