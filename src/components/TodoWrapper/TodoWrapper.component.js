import React, { Component } from 'react';

import './TodoWrapper.component.scss';

import TodoFilter from '../TodoFilter/TodoFilter.component';
import AddTodo from '../AddTodo/AddTodo.component';
import TodoList from '../TodoList/TodoList.component';

export default class TodoWrapper extends Component {

    constructor(props) {
        super(props);

        const storedState = JSON.parse(localStorage.getItem('todosState'));

        // sample todo {description: 'test',completed: false, id: 1}
        if ( storedState ) {
            this.state = storedState 
        } else {
            this.state = {
                todos: [],
                hideCompleted: false,
                currentId: 0
            };
        }
    }

    componentDidUpdate() {
        localStorage.setItem('todosState', JSON.stringify(this.state));
    }

    handleAddTodo(todo) {
        const tempTodo = {...todo, id: this.state.currentId};
        const currentId = this.state.currentId + 1;
        this.setState({currentId: currentId});
        this.setState({todos: [...this.state.todos, tempTodo]});
    }

    handleDeleteTodo(id) {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    }

    handleToggleTodo(id) {
        const tempTodos = [...this.state.todos];
        const todoIndex = this.state.todos.findIndex(todo => todo.id === id )
        tempTodos[todoIndex] = {...tempTodos[todoIndex], completed: !tempTodos[todoIndex].completed}
        this.setState({todos: tempTodos});
    }

    fileteredTodos() {
        return this.state.todos.filter(todo => {
                    if ( this.state.hideCompleted ) {
                        if ( !todo.completed ) {
                            return true;
                        } 

                        return false;
                    }

                    return true;
                });
    }

    render() { 
        return (

            <div className="todoWrapper">
                <TodoFilter 
                    todoCount={this.fileteredTodos().length}
                    hideCompleted={this.state.hideCompleted}
                    toggleHideCompleted={() => this.setState({hideCompleted: !this.state.hideCompleted})} 
                />

                <AddTodo
                    addTodo={(todo) => this.handleAddTodo(todo)}
                />

                <TodoList 
                    todos={this.fileteredTodos()}
                    handleDeleteTodo={(id) => this.handleDeleteTodo(id)} 
                    handleToggleComplete={(id) => this.handleToggleTodo(id)} 
                />
            </div>
        );
    }
}

// export default TodoWrapper;