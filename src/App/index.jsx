import React from 'react';
import { useTodos } from './useTodos';

import { TodoHeader } from '../TodoHeader';
import { TodoTitle } from '../TodoTitle';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoCounter';

import { TodoList } from '../TodoList';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { EmptyResultTodos } from '../EmptyResultTodos';
import { TodoItem } from '../TodoItem';

import { CreateTodoButton } from '../CreateTodoButton';

import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';


import './App.css'

function App() {

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
    
  } = useTodos();
  return (
    <>
      <TodoHeader
        loading = {loading}>
       <TodoTitle />
       <TodoSearch 
        loading = {loading}
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
       />
       <TodoCounter 
        
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
        {/* {todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}//render functions */}
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
    </>
  )
}

export default App
