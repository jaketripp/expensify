import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
    
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // // first time run will always pass
    // // second time, compare snapshot with existing one
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    // console.log(renderer.getRenderOutput());
});
 
