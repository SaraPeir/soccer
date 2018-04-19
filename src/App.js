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
teamData: []
    }
//this.requestInfo2 = this.requestInfo2.bind(this);
  }




requestInfo() {
    var apiRequest1 =  fetch(`http://api.football-data.org/v1/competitions/456/leagueTable`,
      { headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json());
    var apiRequest2 = fetch(`http://api.football-data.org/v1/competitions/456/teams`, {headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json());

    var combinedData = [apiRequest1, apiRequest2];

    Promise.all(combinedData).then(d => {
      let footballData = this.state.data;
      footballData.push(d);
      this.setState({
              data:footballData
            });

for (var i = 0; i < 20; i++) {
  fetch(d[0].standing[i]._links.team.href, {headers:  {'X-Auth-Token': '6ec492bfca974605a2522176f0b354eb'}}).then(response => response.json())
        .then(f => {const footballTeamData = this.state.teamData;
        footballTeamData.push(f)

        this.setState({
          teamData:footballTeamData
        });
        })
}
            })
            // .then(response => response.json())
            //       .then(f => {const footballTeamData = this.state.teamData;
            //       footballTeamData.push(f)
            //
            //       this.setState({
            //         teamData:footballTeamData
            //       });
            //       })
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
//this.requestInfo2();
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
