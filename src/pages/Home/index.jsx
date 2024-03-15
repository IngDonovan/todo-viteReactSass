import React from 'react';

import { useTodos } from '@hooks/useTodos';//custom hook

import { TodoHeader } from '@components/TodoHeader';
import { TodoTitle } from '@components/TodoTitle';
import { TodoSearch } from '@components/TodoSearch';
import { TodoCounter } from '@components/TodoCounter';

import { TodoList } from '@components/TodoList';
import { TodosLoading } from '@components/TodosLoading';
import { TodosError } from '@components/TodosError';
import { EmptyTodos } from '@components/EmptyTodos';
import { EmptyResultTodos } from '@components/EmptyResultTodos';
import { TodoItem } from '@components/TodoItem';

import { CreateTodoButton } from '@components/CreateTodoButton';

import { Modal } from '@components/Modal';
import { TodoForm } from '@components/TodoForm';

import { ChangeAlert } from '@components/ChangeAlert'; 



function Home() {

  const {
    searchValue,
    setSearchValue,
    loading,
    completedTodos,
    totalTodos,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    setOpenModal,
    openModal,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <>
      <TodoHeader
        loading = {loading}>
       <TodoTitle />
       <TodoSearch 
        // loading = {loading}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
       />
       <TodoCounter
        // loading = {loading} 
        completedTodos = {completedTodos}
        totalTodos = {totalTodos}
       />
      </TodoHeader>

      <TodoList
        loading={loading}
        error={error}
        totalTodos = {totalTodos}
        searchedTodos={searchedTodos}
        searchText = {searchValue}
        onLoading={() => <TodosLoading />}
        onError={() => <TodosError />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptyResultTodos={(searchText) => 
          <EmptyResultTodos
            searchText = {searchText}
          />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}//render Props
      >

      </TodoList>

      <CreateTodoButton 
        setOpenModal = {setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm 
            addTodo = {addTodo}
            setOpenModal = {setOpenModal}
          />
        </Modal>
      )}

        <ChangeAlert 
          sincronize= {sincronizeTodos}
        />

    </>
  );
}

export { Home };