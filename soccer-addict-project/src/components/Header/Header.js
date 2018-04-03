import React, { Component } from 'react';
import HeaderBox from './HeaderBox';
import IconItem from './IconItem';
import HeaderTitle from './HeaderTitle';
import MenuButton from './MenuButton';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

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
      <IconItem><Link to={`/`} style={{ textDecoration: 'none' }}>Logo </Link></IconItem>
        <HeaderTitle> Futból </HeaderTitle>
        <MenuButton><Link to={`/`} style={{ textDecoration: 'none' }}>Home </Link></MenuButton>
        <MenuButton> Primera division </MenuButton>
        <MenuButton><Link to={`/class`} style={{ textDecoration: 'none' }}>Serie A </Link></MenuButton>

      </HeaderBox>
      </div>
    );
  }
}

export default Header;
