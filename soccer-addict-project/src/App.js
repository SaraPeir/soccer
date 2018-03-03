import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText :'',
      characters: []
    }
  }

  // sendRequest() {
  //   fetch('http://api.football-data.org/v1/competitions/')
  //   .then((firstResponse) => response.json())
  //   .then((firstResponseJSON) => fetch('http://api.football-data.org/v1/competitions/')
  //   .then((secondResponse) => response.json())
  // }

  render() {
    // const { characters } = this.state;
    // const { filterText } = this.state;

    return (
      <div>
      <Header />
      <Hero />

      </div>

    );
  }

  // componentDidMount(){
  //   this.sendRequest();
  // }
}

export default App;

// <div className="App background">
// <Input onHandleUpdateText = {this.updateText} value={this.state.filterText} />
// <ul className = "container">{
//   characters.filter((character) =>{
//     return character.name.toLowerCase().includes(this.state.filterText.toLowerCase());
//   })
//   .map((character, index)=>{
//     return (
//       <div key={index}>
//       <Character name={character.name} alt={character.name} image={character.image} width={200} height={300} house={character.house} isAlive={character.alive ? '❤' : '☠' } classHidden = {character.house ? '': 'hidden'} />
//       </div>
//     );
//   })
// }</ul>
// </div>
