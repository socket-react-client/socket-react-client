/**
 * Initializes socket connection through socket.io
 * 
 * @author - Dean Edwards (dmedwards4@gmail.com)
 * @author - Cheng Ly (chengsieuly@gmail.com)
 * @author - Michael Sotkin (michael.sotkin@gmail.com)
 */
import React, { Component, PropTypes } from 'react';
import io from 'socket.io-client';

class SocketProvider extends Component {
    /* 
     * NOTE: 'context' is an experimental feature of react
     * and may be changed in future releases
     * https://facebook.github.io/react/docs/context.html
     **/
    getChildContext() {
        return {
            socket: this.props.socket
        };
    }

    render() {
        return this.props.children;
    }
}

SocketProvider.propTypes = {
    socket: PropTypes.object.isRequired
};

SocketProvider.childContextTypes = {
    socket: PropTypes.object.isRequired
};

SocketProvider.defaultProps = {
    socket: io()
};

export default SocketProvider;