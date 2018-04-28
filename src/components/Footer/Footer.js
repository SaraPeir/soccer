import React, { Component } from 'react';
import FooterBox from './FooterBox';
import FooterTitle from './FooterTitle';
import FooterText from './FooterText';

class Footer extends Component {

  render() {
    return (
      <div>
      <FooterBox>
      <FooterTitle> Fútbol <FooterText> By Sara Ⓒ 2018 </FooterText></FooterTitle>

      </FooterBox>
      </div>
    );
  }
}

export default Footer;

//<FooterText> Sara Ⓒ 2018 </FooterText>
