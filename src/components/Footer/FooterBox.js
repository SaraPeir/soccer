import React from "react";
import PropTypes from "prop-types";
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

export const FooterBox = styled.div`
width: 100%;
display: flex;
flex-direction: column;
position: fixed;
justify-content: center;
align-items: center;
top: 760px;
height: 10vh;
background: ${colors.primary};
z-index: 100;
`;



export default FooterBox;

//diminuisci la misura del top oer schermi piu piccoli, per avvicinare il footer
