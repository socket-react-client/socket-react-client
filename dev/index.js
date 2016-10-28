import React from 'react';
import { render } from 'react-dom';
import io from 'socket.io-client';

const socket = io();





class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('root')
);
