import React from 'react';

import './Todo.component.scss';

const Todo = (props) => {

    return (
        <div className="todo">
            <div>
                <input 
                    type="checkbox"  
                    checked={props.todo.completed}
                    onChange={() => props.onToggleComplete()}
                />
                <span className={props.todo.completed ? 'completed' : 'active'}>{props.todo.description}</span>
                
            </div>
            <span className="delete" onClick={() => props.onDeleteTodo()}>x</span>
        </div>
    );
}

export default Todo;