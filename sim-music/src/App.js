import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header/Header';
import routes from'./routes';

class App extends Component {
  render() {
    return (
      <div>
      <div>{routes}</div>
      </div>
    );
  }
}

export default App;
