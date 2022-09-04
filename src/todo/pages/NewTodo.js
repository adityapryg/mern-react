import React from "react";

import Input from "../../shared/FormElements/Input";

import "./NewTodo.css";

const NewTodo = () => {
    return (
        <div>
            <h2 className="center">Tambah Todo</h2>
            <form className="todo-form">
                <Input
                    id="title"
                    type="input"
                    placeholder="input"
                    label="title"
                />
                <Input
                    id="description"
                    type="textarea"
                    placeholder="Description"
                    label="description"
                />
            </form>
        </div>
    );
}

export default NewTodo;