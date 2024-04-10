import React from "react";
import { useParams, useLocation } from 'react-router-dom';
import { useTodos } from "@hooks/useTodos";
import { TodoForm } from '@components/TodoForm';
import { TodoHeader } from "@components/TodoHeader";
import { TodoTitle } from "@components/TodoTitle";
import { TodosLoading } from "@components/TodosLoading";
import './EditTodo.scss';

function EditTodo() {
    const location = useLocation();
    const params = useParams();
    const id = Number(params.id);
    const {
        loading,
        getTodo,
        editTodo,
      } = useTodos();

      let todoText;

    if (location.state?.todo) {
        todoText = location.state.todo.text;
    }else if (loading) {
        return (
            <>
                <TodoHeader>
                    <TodoTitle />
                </TodoHeader>
                <div className="contLoading">
                    <TodosLoading />    
                </div>
            </>
        )
    } else{
        const todo = getTodo(id);
        todoText = todo.text;
    }

    return (
        <>
            <TodoHeader>
                <TodoTitle />
            </TodoHeader>
            <TodoForm 
                label='Modifica el TODO'
                defaultTodoText= {todoText}
                submitText='Editar'
                submitEvent={(newText) => editTodo(id, newText)}
            />
        </>
    );
};

export { EditTodo };