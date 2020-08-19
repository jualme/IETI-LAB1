import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component  {
    render() {
        const todos= this.props.items;
        const listTodo = todos.map((todo, index)=>(
            <li key={index}>
                <Todo priority={todo.priority}
                      text={todo.text}
                      dueDate={todo.dueDate}
                />
            </li>
        ));
        return <ul>{listTodo}</ul>
    }
}