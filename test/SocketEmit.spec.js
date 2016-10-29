import React from 'react';
import chai from 'chai';
import { shallow } from 'enzyme';
import { Server, SocketIO } from 'mock-socket';
import sinon from 'sinon';
import SocketProvider from '../lib/SocketProvider.jsx';
import SocketEmit from '../lib/SocketEmit.jsx';
const expect = chai.expect;

describe('<SocketEmit />', () => {
  const uri = 'localhost:8080';
  const mockServer = new Server(uri);
  global.io = SocketIO;

  const wrapperProp = shallow(
    <SocketEmit emit='cat' with={{ meow: 'purr' }}>
      <button></button>
    </ SocketEmit>,
    { context: { socket: global.io() }}
  );

  describe('Props', () => {
    it('The props are properly passed down to direct children', () => {
      expect(wrapperProp.find('button').props()).to.exist;
    });
  }); 

  /*
  * Add a test to emit event and recieve on mockserver.
  */

});