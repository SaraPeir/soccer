import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';
import Image2 from '../../Images/Image2.jpeg';

export const SerieATableBox = styled.div`
padding-top: 100px;
padding-bottom: 100px;
width: 100%;
height: 900px;
background-image: url(${Image2});
background-position: center;
background-size: contain;
text-align: center;
`;

export default SerieATableBox;
