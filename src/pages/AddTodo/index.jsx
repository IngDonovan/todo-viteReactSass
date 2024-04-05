import React from "react";
import { TodoForm } from '@components/TodoForm';
import { TodoHeader } from "@components/TodoHeader";
import { TodoTitle } from "@components/TodoTitle";

function AddTodo() {
    return (
        <>
            <TodoHeader>
                <TodoTitle />
            </TodoHeader>
            <TodoForm 
                label='Escribe tu nuevo TODO'
                submitText='Añadir'
                submitEvent={() => console.log('Llamar a addTodo')}
            />
        </>
    );
};

export { AddTodo };