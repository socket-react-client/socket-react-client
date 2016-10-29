/**
 * Component that emits an event to the server with socket.io
 *
 * @author - Dean Edwards (dmedwards4@gmail.com)
 * @author - Cheng Ly (chengsieuly@gmail.com)
 * @author - Michael Sotkin (michael.sotkin@gmail.com)
 */

import React, { Children, cloneElement, Component, PropTypes } from 'react';

class SocketEmit extends Component {
  /**
   * Emits an event to socket after receiving name of event and data props
   */
  emit() {
    this.context.socket.emit(this.props.emit, this.props.with);
  }

  /**
   * Creates shallow clones of child nodes and affixes emit function as props
   */
  render() {
    return (
      <div>
        {Children.map(this.props.children, child => (
          cloneElement(child, { emit: this.emit.bind(this) })
        ))}
      </div>
    );
  }
}

SocketEmit.propTypes = {
  emit: PropTypes.string.isRequired,
  with: PropTypes.any
};

SocketEmit.contextTypes = {
  socket: PropTypes.object.isRequired
};

export default SocketEmit;
