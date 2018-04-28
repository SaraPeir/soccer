import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import SerieATable from './components/SerieATable/SerieATable';
import ScheduledMatchs from './components/Matchs/ScheduledMatchs';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
constructor(props) {
super(props);
this.state = {
data: [],
teamDailyData: [],
selectValue: 'Todos los equipos'
}
this.selectTeam = this.selectTeam.bind(this);
}

selectTeam(event){
this.setState({
selectValue: event.target.value
});

const teamData = this.state.data[0][1].fixtures;
let teamName = event.target.value;

  let filtered1 = teamData.filter(function(team) {
      return team.homeTeamName == teamName;
  });
  let filtered2 = teamData.filter(function(team) {
      return team.awayTeamName == teamName;
  });
let filtered = filtered1.concat(filtered2);
let dailyOrderedFilteredArray = filtered.sort((a,b) => {return a.matchday - b.matchday});
this.setState({
  teamDailyData:dailyOrderedFilteredArray
});

}


requestInfo() {
  var apiRequest1 =  fetch(`http://api.football-data.org/v1/competitions/456/leagueTable`, { headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json());
  var apiRequest2 = fetch(`http://api.football-data.org/v1/competitions/456/fixtures`, {headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json());
  var combinedData = [apiRequest1, apiRequest2];
  Promise.all(combinedData).then(d => {
  let footballData = this.state.data;
  footballData.push(d);
  this.setState({
    data:footballData
  });
})
}

componentDidMount(){
this.requestInfo();
}

  render() {
    const data = this.state.data;
const teamDailyData = this.state.teamDailyData;
    return (
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ Hero } />
        <Route path='/class' render={(props) => <SerieATable {...props} listData={data}/>}/>
        <Route path='/scheduled' render={(props) => <ScheduledMatchs {...props} matchsDay={data} matchsDayList={data} teamsNamesArray = {data} matchsTeam = {teamDailyData} onSelectTeam={this.selectTeam} onSelectValue = {this.state.selectValue} />} />


      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;

// <Route path='/programmed' render={(props) => <ToDoMatchs {...props} matchsDay={data} />} />
// <Route path='/matchs' render={(props) => <Matchs {...props} matchsDay={data} teamsNamesArray = {data} />} />
