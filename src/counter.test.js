import React from 'react';
import { shallow } from 'enzyme'; 
import Counter from './counter';

it(`increments count by 1 when the increment button is clicked`,() => {
    //targeting component using shallow
    const wrapper = shallow(<Counter/>)

    //targeting element using classname
    const incrementButton = wrapper.find('button.increment')

    //simulating action click using simulate function
    incrementButton.simulate('click')

    //targeting element h1 fetching text using text function
    const text = wrapper.find('h1').text()

    //Assertions
    expect(text).toEqual('Value : 1')

})