import React, { Component } from 'react';
import { render } from 'react-dom';
import SocketProvider from './../lib/SocketProvider.jsx';

class App extends Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

render(
  <SocketProvider>
    <App />
  </ SocketProvider>,
  document.getElementById('root')
);
