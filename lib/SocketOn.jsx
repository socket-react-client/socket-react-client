/**
 * Component for listening to events from the server with socket.io
 * 
 * @author - Dean Edwards (dmedwards4@gmail.com)
 * @author - Cheng Ly (chengsieuly@gmail.com)
 * @author - Michael Sotkin (michael.sotkin@gmail.com)
 */

import React, { Component, PropTypes } from 'react';

class SocketOn extends Component {
  componentDidMount() {
    this.on(this.props.name, this.props.callback);
  }

  /**
   * Listens for event from socket
   * @param {string} name - name of the event emitter
   * @param {function} callback - invoked on receiving event
   */
  on(name, callback) {
    this.context.socket.on(name, callback);
  }

  render() {
    return this.props.children;
  }
};

SocketOn.propTypes = {
  name: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired
};

SocketOn.contextTypes = {
  socket: PropTypes.object.isRequired
};


export default SocketOn;