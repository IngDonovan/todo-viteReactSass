import React from 'react';
import { useTodos } from './useTodos';

import { TodoHeader } from '../TodoHeader';
import { TodoTitle } from '../TodoTitle';
import { TodoSearch } from '../TodoSearch';
import { TodoCounter } from '../TodoCounter';

import './App.css'

function App() {

  const {
    searchValue,
    setSearchValue,
    loading,
    completedTodos,
    totalTodos,
  } = useTodos();
  return (
    <>
      <TodoHeader>
       <TodoTitle />
       <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
       />
       <TodoCounter 
        loading = {loading}
        completedTodos = {completedTodos}
        totalTodos = {totalTodos}
       />  
      </TodoHeader>
    </>
  )
}

export default App
