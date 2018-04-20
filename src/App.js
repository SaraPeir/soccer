import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import SerieATable from './components/SerieATable/SerieATable';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

class App extends Component {
constructor(props) {
super(props);
this.state = {
data: [],
teamData: []}
}

//http://api.football-data.org/v1/teams/113/fixtures
//http://api.football-data.org/v1/teams/113/players
//http://api.football-data.org/v1/teams/113

// requestInfo2(){
// const teamsCodes = ['Napoli': 113, 'Roma': 100, 'Lazio': 110, 'Inter': 108, 'Atalanta': 102, 'Fiorentina': 99, 'Milan': 98, 'Sampdoria': 584, 'Torino': 586, 'Genoa': 107, 'Bologna': 103,
// 'Udinese': 115, 'Sassuolo': 471, 'Cagliari': 104, 'Chievo': 106, 'Spal': 1107, 'Crotone': 472, 'Hellas': 450, 'Benevento': 1106, 'Juve': 109];
//
// var apiRequest3 =  fetch(`http://api.football-data.org/v1/teams/${teamsCodes[7]/fixtures}`,
//   { headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json());
//   var apiRequest3 =  fetch(`http://api.football-data.org/v1/teams/${teamsCodes[7]/players}`,
//     { headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json());
//
// var combinedData = [apiRequest3, apiRequest4];
//
// Promise.all(combinedData).then(d => {
//   let footballData = this.state.data;
//   footballData.push(d);
//   this.setState({
//           data:footballData
//         });
//
// for (var i = 0; i < 20; i++) {
// fetch(d[0].standing[i]._links.team.href, {headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json())
//     .then(f => {const footballTeamData = this.state.teamData;
//     footballTeamData.push(f)
//
//     this.setState({
//       teamData:footballTeamData
//     });
//     })
// }
//         })
// }


requestInfo() {
var apiRequest1 =  fetch(`http://api.football-data.org/v1/competitions/456/leagueTable`, { headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json());
var apiRequest2 = fetch(`http://api.football-data.org/v1/competitions/456/teams`, {headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json());
var combinedData = [apiRequest1, apiRequest2];
Promise.all(combinedData).then(d => {
let footballData = this.state.data;
footballData.push(d);
this.setState({
data:footballData
});
for (var i = 0; i < 20; i++) {
fetch(d[0].standing[i]._links.team.href, {headers:  {'X-Auth-Token':'6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json())
.then(f => {const footballTeamData = this.state.teamData;
footballTeamData.push(f)
this.setState({
teamData:footballTeamData
});
})
}
})
}






  // requestInfo() {
  //     var apiRequest1 =  fetch(`http://api.football-data.org/v1/competitions/456/leagueTable`,
  //       { headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json());
  //     var apiRequest2 = fetch(`http://api.football-data.org/v1/competitions/456/teams`, {headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json());
  //
  //     var combinedData = [apiRequest1, apiRequest2];
  //
  //     Promise.all(combinedData).then(d => {
  //       let footballData = this.state.data;
  //       footballData.push(d)
  //
  //       this.setState({
  //         data:footballData
  //       });
  //
  //     }).catch(error => alert('error to load'));
  // }




componentDidMount(){
this.requestInfo();
}

  render() {
    const data = this.state.data;
    return (
      <div>
      <Header />
      <Switch>
      <Route exact path='/' component={ Hero } />
      <Route path='/class' render={(props) => <SerieATable {...props} listData={data}/>}/>
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
