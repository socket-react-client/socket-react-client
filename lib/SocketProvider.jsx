import React, { Component, PropTypes } from 'react';
import io from 'socket.io-client';

class SocketProvider extends Component {
    render() {
        return this.props.children;
    }
}

SocketProvider.propTypes = {
    socket: PropTypes.object.isRequired 
};

SocketProvider.defaultProps = { 
    socket: io() 
};

export default SocketProvider;