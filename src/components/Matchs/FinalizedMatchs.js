import React, { Component } from 'react';
import './FinalizedMatchs.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ButtonsContainer from './ButtonsContainer';
import MatchCard from './MatchCard';

class FinalizedMatchs extends Component {
render() {
return (
<div class="finalized-matchs-box">
<ButtonsContainer />
<div class="finalized-cards-container">
<MatchCard />
<MatchCard />
<MatchCard />
<MatchCard />
<MatchCard />
</div>
</div>
);
}
}

export default FinalizedMatchs;
