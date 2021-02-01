import React from 'react';
import { shallow } from 'enzyme';

import AddTodo from '../../components/AddTodo/AddTodo.component';

test('should test AddTodo component', () => {
    const wrapper = shallow(<AddTodo/>);
    expect(wrapper).toMatchSnapshot();
});

test('should test AddTodo component handler', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<AddTodo addTodo={onSubmitSpy}/>);
    const form = wrapper.find('div').find('form');
    const input = form.find('input');

    input.simulate('change', { target: { value: 'test' } });
    form.simulate('submit');
    expect(onSubmitSpy).toBeCalledWith({description: 'test',completed: false});
});
