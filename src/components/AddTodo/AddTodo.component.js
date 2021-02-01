import React, { Component } from 'react';

import './AddTodo.component.scss';

class AddTodo extends Component {

    constructor(props) {
        super(props);

        this.state = {
            description: '',
            completed: false,
        };
    }

    handleSubmit(e) {
        this.props.addTodo(this.state);
        this.clearState();
    }

    clearState() {
        this.setState({
            description: '',
            completed: false
        })
    }

    render() { 
        return (
            <div className="addTodo">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <input 
                        type="text" 
                        placeholder="Type to add new tasks"
                        value={this.state.description}
                        onChange={e => this.setState({description: e.target.value})}/>
                </form>
            </div>
        );
    }
}

export default AddTodo;