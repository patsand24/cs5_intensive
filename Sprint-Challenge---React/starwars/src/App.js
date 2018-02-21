import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        {this.state.starwarsChars.map((character, index) => {
         return (
              <Card 
              character={character.name} 
              birthYear={character.birth_year}
              height={character.height}
              sex={character.sex}
              eyeColor={character.eye_color}
              hairColor={character.hair_color}
              mass={character.mass}
              />
         )
        })}
      </div>
    );
  }
}

export default App;
