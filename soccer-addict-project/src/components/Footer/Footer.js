import React, { Component } from 'react';
import FooterBox from './FooterBox';
import FooterTitle from './FooterTitle';
import FooterText from './FooterText';

class Footer extends Component {

  render() {
    return (
      <div>
      <FooterBox>
      <FooterTitle> Futból </FooterTitle>
      <FooterText> Sara Ⓒ 2018 </FooterText>
      </FooterBox>
      </div>
    );
  }
}

export default Footer;

//
