import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SocketProvider from '../lib/SocketProvider.jsx';

describe('<SocketProvider />', () => {
  const wrapper = shallow(<SocketProvider uri='localhost:8080' />);

  describe('Props', () => {
    it('has a prop call socket', () => {
      expect(wrapper.instance().props.socket).to.exist;
    });

    it('has a prop call uri', () => {
      const uri = wrapper.instance().props.uri;
      expect(uri).to.exist;
      expect(uri).to.be.a.string;
    });
  });
});
