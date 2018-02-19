import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import logo from './logo.svg';
import Character from './components/Character';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText :'',
      characters: []
    }

    this.updateText = this.updateText.bind(this);
  }

  updateText(event){
    this.setState({
      filterText: event.target.value
    });
  }

  sendRequest() {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        characters: data
      });
    });
  }

  render() {
    const { characters } = this.state;
    const { filterText } = this.state;

    return (
      <div className="App">
      <Input onHandleUpdateText = {this.updateText} value={this.state.filterText} />


      <ul className = "container">{

        characters.filter((character) =>{
        return character.name.toLowerCase().includes(this.state.filterText.toLowerCase());
        })
        .map((character, index)=>{
          //let isCharacterAlive;
          // if(character.alive){
          //   isCharacterAlive = '❤';
          // } else{
          //   isCharacterAlive = 'XXX';
          // }

          // let hidden;
          // if(character.house == ''){
          //   hidden = 'hidden';
          // } else{
          //   hidden = '';
          // }
          return (
            <div key={index}>
            <Character name={character.name} alt={character.name} image={character.image} width={200} height={300} house={character.house} isAlive={character.alive ? '❤' : '☠' } classHidden = {character.house ? '': 'hidden'} />
            </div>
          );
        })

      }</ul>

      </div>


    );
    }

    componentDidMount(){
    this.sendRequest();
  }
}

export default App;
