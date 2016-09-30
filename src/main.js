import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

  constructor() {
    super();
    this.state = {
      message: 'Welcome to your React App Boilerplate'
    }
  }

  render() {
    return (
      <div>
        <h1>{ this.state.message }</h1>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#app'));