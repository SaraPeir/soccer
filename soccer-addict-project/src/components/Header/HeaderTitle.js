import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

const HeaderTitle = styled.div`
color: ${colors.light};
font-size: 70px;
background: ${colors.primary};
width: 60%;
line-height: 20vh;
height: 100%;
border: 1px solid ${colors.light};
`;


export default HeaderTitle;
