import React, { Component } from 'react';
import './ScheduledMatchs.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import ButtonsContainer from './ButtonsContainer';
import MatchsDay from './MatchsDay';
import MatchsDayRecovery from './MatchsDayRecovery';
import Select from './Select';


class ScheduledMatchs extends Component {
  constructor(props) {
  super(props);
  }

  render() {
    return (
      <div class="scheduled-matchs-box">
      <Select teamsArray = {this.props.teamsNamesArray} />

      <ButtonsContainer />





<MatchsDay matchsDaysList = {this.props.matchsDay} start = {330} end = {340}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {320} end = {330}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {310} end = {320}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {300} end = {310}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {283} end = {293}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {273} end = {283}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {262} end = {272}/>

<MatchsDay matchsDaysList = {this.props.matchsDay} start = {259} end = {262}/>



<MatchsDayRecovery matchsDaysList = {this.props.matchsDay} start = {293} end = {300}/>

<MatchsDay matchsDaysList = {this.props.matchsDay} start = {250} end = {259}/>
<MatchsDayRecovery matchsDaysList = {this.props.matchsDay} start = {272} end = {273}/>

<MatchsDay matchsDaysList = {this.props.matchsDay} start = {240} end = {250}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {230} end = {240}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {220} end = {230}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {210} end = {220}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {198} end = {208}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {188} end = {198}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {178} end = {188}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {168} end = {178}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {158} end = {168}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {148} end = {158}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {138} end = {148}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {128} end = {138}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {118} end = {128}/>


<MatchsDay matchsDaysList = {this.props.matchsDay} start = {109} end = {118}/>
<MatchsDayRecovery matchsDaysList = {this.props.matchsDay} start = {208} end = {209}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {99} end = {109}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {89} end = {99}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {79} end = {89}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {69} end = {79}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {59} end = {69}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {49} end = {59}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {39} end = {49}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {29} end = {39}/>

<MatchsDay matchsDaysList = {this.props.matchsDay} start = {20} end = {29}/>
<MatchsDayRecovery matchsDaysList = {this.props.matchsDay} start = {209} end = {210}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {10} end = {20}/>
<MatchsDay matchsDaysList = {this.props.matchsDay} start = {0} end = {10}/>








      </div>
    );
  }
}

export default ScheduledMatchs;

//
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {0} end = {10}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {10} end = {20}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {20} end = {29}/>
// <MatchsDayRecovery matchsDaysList = {this.props.matchsDay} start = {209} end = {210}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {29} end = {39}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {39} end = {49}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {49} end = {59}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {59} end = {69}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {69} end = {79}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {79} end = {89}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {89} end = {99}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {99} end = {109}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {109} end = {118}/>
// <MatchsDayRecovery matchsDaysList = {this.props.matchsDay} start = {208} end = {209}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {118} end = {128}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {128} end = {138}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {138} end = {148}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {148} end = {158}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {158} end = {168}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {168} end = {178}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {178} end = {188}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {188} end = {198}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {198} end = {208}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {210} end = {220}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {220} end = {230}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {230} end = {240}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {240} end = {250}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {250} end = {259}/>
// <MatchsDayRecovery matchsDaysList = {this.props.matchsDay} start = {272} end = {273}/>
//
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {259} end = {262}/>
// <MatchsDayRecovery matchsDaysList = {this.props.matchsDay} start = {293} end = {300}/>
//
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {262} end = {272}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {273} end = {283}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {283} end = {293}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {300} end = {310}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {310} end = {320}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {320} end = {330}/>
// <MatchsDay matchsDaysList = {this.props.matchsDay} start = {330} end = {340}/>
