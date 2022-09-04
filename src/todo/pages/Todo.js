import React from "react";
import TodoList from "../components/TodoList";

const DUMMY_TODO = [
    {
        "id": "tid1",
        "title": "Belajar React"
    },
    {
        "id": "tid2",
        "title": "Belajar ExpressJS"
    }
]

const Todo = () => {
    return (
        <TodoList items={DUMMY_TODO}/>
    );
}

export default Todo;