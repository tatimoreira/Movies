import React from 'react';
import { shallow } from 'enzyme';
import TestNavBar from '../NavBar'; 

describe('NavBar', () => {

    it('renders the NavBar', () => {
      const wrapper = shallow(<TestNavBar />);
  
      expect(wrapper.find('.navBar')).toHaveLength(0);
    });
  });