import React from 'react';
import {Todo} from './Todo';

export class TodoList extends React.Component  {
    render() {
        const todos= this.props.todoList;
        const listTodo = todos.map((todo)=>
            <Todo priority={todo.priority} text={todo.text}  dueDate={todo.dueDate}/>
        );
        return <ul>{listTodo}</ul>
    }
}