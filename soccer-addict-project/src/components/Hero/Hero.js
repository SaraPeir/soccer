import React, { Component } from 'react';
import './Hero.css';
import Image5 from '../../Images/Image5.jpg';
import Image4 from '../../Images/Image4.jpeg';
import Image6 from '../../Images/Image6.jpg';
import Sentence from './Sentence'


class Hero extends Component {

  render() {
          return (
            <div class="slider">
              <ul>
                <li><Sentence>¿El futbol te apasiona desde cuando eras un niño?</Sentence><img src={Image6}   alt="" />
              </li>
                <li><Sentence>¿Te gustaría estar siempre actualizado de todas las noticias relativas a los partidos?</Sentence><img src={Image4}   alt="" /></li>
                <li><Sentence>¡Bienvenido en Futból!</Sentence><img src={Image5}   alt="" /></li>
              </ul>
            </div>
          );
        }
      }

export default Hero;

// <img src={Image6}   alt="" />
// <img src={Image4} alt="" />
// <img src={Image5}  alt="" />
