import React from "react";
import { TodoForm } from '@components/TodoForm';

function AddTodo() {
    return (
        <TodoForm 
            label='Escribe tu nuevo TODO'
            submitText='Añadir'
            submitEvent={() => console.log('Llamar a addTodo')}
        />
    );
};

export { AddTodo };