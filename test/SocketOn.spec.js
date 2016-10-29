import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Server, SocketIO } from 'mock-socket';
import sinon from 'sinon';

import SocketProvider from '../lib/SocketProvider.jsx';
import SocketOn from '../lib/SocketOn.jsx';

const expect = chai.expect;

/**
 * Having trouble getting mockServer to run. This test is a work in progress.
 */
describe('<SocketOn />', () => {
 const url = 'http://localhost:8080';
 const mockServer = new Server(url);
 const callback = sinon.spy();
 
 mockServer.on('connection', socket => {
   socket.emit('test', callback);
 });

});
