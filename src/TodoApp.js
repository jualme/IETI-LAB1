import React from 'react';
import {TodoList} from './TodoList';

export class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '',
            priority: "", dueDate:'' };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePriority  = this.handleChangePriority.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h3>ADD TODO</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">
                        What needs to be done? &nbsp;
                    </label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <br/>
                    <label htmlFor="new-todo-priority">
                        What is the priority of the task? &nbsp;
                    </label>
                    <input
                        id="new-todo-priority"
                        onChange={this.handleChangePriority}
                        value={this.state.priority}
                    />
                    <br/>
                    <button>
                        Send #{this.state.items.length + 1}
                    </button>
                </form>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleChangePriority(e) {
        this.setState({ priority: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }
        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: new Date(),
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}