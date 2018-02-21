import React, { Component } from 'react';
import Header from './Components/Header';
import Details from './Components/Details';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Details/>
      </div>
    );
  }
}

export default App;
