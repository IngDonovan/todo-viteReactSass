import React from "react";
import { TodoForm } from '@components/TodoForm';

function EditTodo() {
    return (
        <TodoForm 
            label='Modifica el TODO'
            submitText='Editar'
            submitEvent={() => console.log('Llamar a editTodo')}
        />
    );
};

export { EditTodo };