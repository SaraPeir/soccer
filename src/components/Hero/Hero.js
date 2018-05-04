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
                <li id="li1"><Sentence>¿El futbol te apasiona desde cuando eras un niño?</Sentence></li>
                <li id="li2"><Sentence>¿Te gustaría estar siempre actualizado de todas las noticias relativas a los partidos?</Sentence></li>
                <li id="li3"><Sentence>¡Bienvenido en Fútbol - Serie A!</Sentence></li>
              </ul>
            </div>
          );
        }
      }

export default Hero;
