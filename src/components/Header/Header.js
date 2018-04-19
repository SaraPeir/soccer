import React, { Component } from 'react';
import HeaderBox from './HeaderBox';
import IconItem from './IconItem';
import HeaderTitle from './HeaderTitle';
import MenuButton from './MenuButton';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
      <HeaderBox>
      <IconItem><Link to={`/`} style={{ textDecoration: 'none' }}>Logo </Link></IconItem>
        <HeaderTitle> Futból </HeaderTitle>
      <Link to={`/`} style={{ textDecoration: 'none' }}>  <MenuButton>Home </MenuButton></Link>
        <Link to={`/class`} style={{ textDecoration: 'none' }}><MenuButton>Serie A </MenuButton></Link>

      </HeaderBox>
      </div>
    );
  }
}

export default Header;

//<MenuButton> Primera division </MenuButton>
