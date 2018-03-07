import React, { Component } from 'react';
import './stylesheets/App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="">
        <header className="">
          {/* <h1 className="App-title">Welcome to React</h1> */}
          <h1>Star Wars Database Search</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;
