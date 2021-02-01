import React, { Component } from 'react';

import './TodoFilter.component.scss';

const TodoFilter = ({todoCount, hideCompleted, toggleHideCompleted}) => {

    return (
        <div className="todoFilter">
            <form>
                { 'Todo List(' + todoCount + ')' }
                <input 
                    type="checkbox"  
                    checked={hideCompleted}
                    onChange={() => toggleHideCompleted()}
                />
            </form>
        </div>
    );
}


export default TodoFilter;