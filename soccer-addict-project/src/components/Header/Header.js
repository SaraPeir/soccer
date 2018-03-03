import React, { Component } from 'react';
import HeaderBox from './HeaderBox';
import IconItem from './IconItem';
import HeaderTitle from './HeaderTitle';
import MenuButton from './MenuButton';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText :'',
      characters: []
    }
  }

  render() {
    return (
      <div>
      <HeaderBox>
      <IconItem>Logo</IconItem>
        <HeaderTitle> Soccer addict </HeaderTitle>
        <MenuButton> Primera division </MenuButton>
        <MenuButton> Serie A </MenuButton>
      </HeaderBox>
      </div>
    );
  }
}

export default Header;
