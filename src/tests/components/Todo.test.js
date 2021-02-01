import React from 'react';
import { shallow } from 'enzyme';
import Todo from '../../components/Todo/Todo.component';

test('should test Todo component', () => {
    const wrapper = shallow(<Todo todo={{description: 'test',completed: false, id: 1}} />);
    expect(wrapper).toMatchSnapshot();
});

test('should test Todo component deleteTodo', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(
        <Todo 
            todo={{description: 'test',completed: false, id: 1}}
            onDeleteTodo={onSubmitSpy}
        />);
    
    const delBtn = wrapper.find('div.todo span.delete');
    
    delBtn.simulate('click', { bubbles: true });

    expect(onSubmitSpy).toHaveBeenCalled();
});

test('should test Todo component toggleComplete', () => {
    const onSubmitSpy = jest.fn();
    
    const wrapper = shallow(
        <Todo 
            todo={{description: 'test',completed: false, id: 1}}
            onToggleComplete={onSubmitSpy}
        />);

    const toggleCheckbox = wrapper.find('div.todo div input');
    
    toggleCheckbox.simulate('change');

    expect(onSubmitSpy).toHaveBeenCalled();
});