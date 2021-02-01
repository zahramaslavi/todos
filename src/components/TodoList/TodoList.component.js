import React from 'react';

import './TodoList.component.scss';

import Todo from '../Todo/Todo.component';

const TodoList = (props) => {

    return (
        <div className="todoList">
            {   props.todos.map(
                        todo => (
                            <Todo 
                                key={todo.id} 
                                todo={todo} 
                                onDeleteTodo={() => props.handleDeleteTodo(todo.id)} 
                                onToggleComplete={() => props.handleToggleComplete(todo.id)}
                            />
                    )
                )
            }
        </div>
    );

}

export default TodoList;