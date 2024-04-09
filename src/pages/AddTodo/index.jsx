import React from "react";
import { TodoForm } from '@components/TodoForm';
import { TodoHeader } from "@components/TodoHeader";
import { TodoTitle } from "@components/TodoTitle";
import { useTodos } from "@hooks/useTodos";

function AddTodo() {
    const {
        addTodo,
      } = useTodos();
    return (
        <>
            <TodoHeader>
                <TodoTitle />
            </TodoHeader>
            <TodoForm 
                label='Escribe tu nuevo TODO'
                submitText='Añadir'
                submitEvent={(text) => addTodo(text)}
            />
        </>
    );
};

export { AddTodo };