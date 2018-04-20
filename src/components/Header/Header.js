import React, { Component } from 'react';
import HeaderBox from './HeaderBox';
import IconItem from './IconItem';
import HeaderTitle from './HeaderTitle';
import MenuButton from './MenuButton';
import HeaderBoxLeft from './HeaderBoxLeft';
import HeaderBoxRight from './HeaderBoxRight';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import soccerIcon from '../../Images/soccer-icon.svg';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <HeaderBox>
<HeaderBoxLeft>
      <IconItem><img src={soccerIcon}  height="90%" width="90%" /> </IconItem>
 <HeaderTitle>Futból</HeaderTitle>
</HeaderBoxLeft>

<HeaderBoxRight>
      <Link to={`/`} style={{ textDecoration: 'none' }}>  <MenuButton>Home </MenuButton></Link>
        <Link to={`/class`} style={{ textDecoration: 'none' }}><MenuButton>Serie A </MenuButton></Link>
</HeaderBoxRight>

      </HeaderBox>
      </div>
    );
  }
}

export default Header;

//<MenuButton> Primera division </MenuButton>
