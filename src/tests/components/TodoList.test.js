import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../components/TodoList/TodoList.component';

const data = [
    {description: 'test',completed: false, id: 0},
    {description: 'test',completed: false, id: 1},
    {description: 'test',completed: false, id: 2},
];

const onSubmitSpy = jest.fn();

const wrapper = shallow(
    <TodoList
        todos={data}
        handleDeleteTodo={onSubmitSpy} 
        handleToggleComplete={onSubmitSpy} 
    />);

test('should test TodoList component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
});


const firstTodo = wrapper.find('Todo').first();

test('should test Todos component onDeleteTodo of first todo', () => {
    firstTodo.props().onDeleteTodo();
    expect(onSubmitSpy).toHaveBeenCalled();
});

test('should test Todos component toggleComplete of first todo', () => {
    firstTodo.props().onToggleComplete();
    expect(onSubmitSpy).toHaveBeenCalled();
});