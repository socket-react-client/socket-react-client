import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import SocketProvider from '../lib/SocketProvider.jsx';

describe('<SocketProvider />', () => {
  const wrapper = shallow(<SocketProvider url='localhost:8080' />);

  describe('Props', () => {
    it('has a prop call socket', () => {
      expect(wrapper.instance().props.socket).to.exist;
    });

    it('has a prop call url', () => {
      const url = wrapper.instance().props.url;
      expect(url).to.exist;
      expect(url).to.be.a.string;
    });
  });
});
