import React from "react";
import { useParams } from 'react-router-dom';
import { useTodos } from "@hooks/useTodos";
import { TodoForm } from '@components/TodoForm';
import { TodoHeader } from "@components/TodoHeader";
import { TodoTitle } from "@components/TodoTitle";

function EditTodo() {
    const params = useParams();
    const id = Number(params.id);
    const {
        editTodo,
      } = useTodos();
    return (
        <>
            <TodoHeader>
                <TodoTitle />
            </TodoHeader>
            <TodoForm 
                label='Modifica el TODO'
                submitText='Editar'
                submitEvent={(newText) => editTodo(id, newText)}
            />

        </>
    );
};

export { EditTodo };