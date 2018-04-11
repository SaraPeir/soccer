import React, { Component } from 'react';
import './Hero.css';
import styled from 'styled-components';
import {colors} from '../../Styles/Variables';

const Sentence = styled.div`
color: ${colors.primary};
position: relative;
top: -100px;
text-align: center;
font-size: 30px;
background: ${colors.light};
width: 80%;
margin-left: 120px;
opacity: 0.8;
font-weight: bold;

animation: sentenceAppearing 1s 1;
animation-delay: 1s;
animation-fill-mode: forwards;

@keyframes sentenceAppearing {
  from {top: -100px;}
  to {top: 100px;}
`;

// animation: sentenceAppearing 1s 3;
// animation-delay: 1s;
// animation-fill-mode: forwards;
//
// @keyframes sentenceAppearing {
//   from {top: -100px;}
//   to {top: 50px;}
// }

// 0% {top: 0px;}
// 25% {top: 25px;}
// 50% {top: 50px;}
// 75% {top: 75px;}
// 100% {top: 100px;}

// class Sentence extends Component {
//
//   render() {
//           return (
//             <sentenceBox>
//
//             </div>
//           );
//         }
//       }

export default Sentence;
