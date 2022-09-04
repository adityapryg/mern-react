import React from "react";
import TodoItem from "./TodoItem";
import Button from "../../shared/UIEelements/Button";
import './TodoList.css';

const TodoList = props => {
    if (props.items.lenght === 0) {
        return (
            <div className="center">
                <h2>Tidak ada todolist!</h2>
            </div>
        )
        
    }

    return (
        <div>
            <h2 className="center">Todolist</h2>
            <Button to="/tambah"> Tambah Todo </Button>
            <ul className="todo-list">
                {props.items.map(todo => {
                    return <TodoItem 
                        key={todo.id}
                        title={todo.title}
                        description={todo.description}
                    />
                })}
            </ul>
        </div>
    )
}

export default TodoList;