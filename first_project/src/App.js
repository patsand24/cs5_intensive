import React, {Component} from 'react';
import './App.css';
import Second from './components/02'; // Component with Props from Parent.
import Third from './components/03'; // Component with State
import Fourth from './components/04';
import Fifth from './components/05';
import Sixth from './components/06';
import Seventh from './components/07';
import Eighth from './components/08';
import Ninth from './components/09';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Second blanket={'Blanky'}/> */}
        {/* <Third/> */}
        <Fourth/>
        <Fifth/>
        <Sixth/>
        <Seventh/>
        <Eighth/>
        <Ninth/>
      </div>
    );
  }
}

export default App;