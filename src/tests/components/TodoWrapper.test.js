import React from 'react';
import { shallow } from 'enzyme';
import TodoWrapper from '../../components/TodoWrapper/TodoWrapper.component';

// const onSubmitSpy = jest.fn();
const wrapper = shallow(<TodoWrapper/>);

test('should test TodoWrapper component snapshot', () => {
    expect(wrapper).toMatchSnapshot();
});

//State change tests
wrapper.setState({
    todos: [
        {description: 'test',completed: false, id: 0},
        {description: 'test',completed: false, id: 1},
        {description: 'test',completed: false, id: 2},
    ],
    hideCompleted: false,
    currentId: 3
});

const todoFilter = wrapper.find('TodoFilter').first();
test('should test TodoWrapper component toggleHideCompleted of TodoFilter component', () => {
    const prevHideCompleted = wrapper.state().hideCompleted;

    todoFilter.props().toggleHideCompleted();
    expect(wrapper.state().hideCompleted).toBe(!prevHideCompleted);
});

const addTodo = wrapper.find('AddTodo').first();
test('should test Todos component addTodo of AddTodo', () => {
    const prevTodosLength = wrapper.state().todos.length;
    const prevCurrentId = wrapper.state().currentId;

    addTodo.props().addTodo();
    expect(wrapper.state().todos.length).toBe(prevTodosLength + 1);
    expect(wrapper.state().currentId).toBe(prevCurrentId + 1);
});

const todoList = wrapper.find('TodoList').first();
test('should test Todos component handleDeleteTodo of TodoList', () => {
    const prevTodosLength = wrapper.state().todos.length;

    todoList.props().handleDeleteTodo(0);
    expect(wrapper.state().todos.length).toBe(prevTodosLength - 1);
});

test('should test Todos component handleToggleComplete of TodoList', () => {
    const id = 1;
    const prevCompleted = wrapper.state().todos.find(todo => todo.id == id).completed;
    todoList.props().handleToggleComplete(id);

    expect(wrapper.state().todos.find(todo => todo.id == id).completed).toBe(!prevCompleted);
});