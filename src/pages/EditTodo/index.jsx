import React from "react";
import { TodoForm } from '@components/TodoForm';
import { TodoHeader } from "@components/TodoHeader";
import { TodoTitle } from "@components/TodoTitle";

function EditTodo() {
    return (
        <>
            <TodoHeader>
                <TodoTitle />
            </TodoHeader>
            <TodoForm 
                label='Modifica el TODO'
                submitText='Editar'
                submitEvent={() => console.log('Llamar a editTodo')}
            />

        </>
    );
};

export { EditTodo };