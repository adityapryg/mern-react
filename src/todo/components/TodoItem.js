import React from "react";

import Card from '../../shared/UIEelements/Card';

import './TodoItem.css';

const TodoItem = props => {
    return (
        <li className="todo-item">
            <Card className="todo-item__content">
                <div className="todo-item__info">
                    <h2>{props.title}</h2>
                </div>
                <div className="todo-item__actions">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </Card>
        </li>
    );
}

export default TodoItem;