import React from 'react';
import { useTodos } from './useTodos';

import { TodoHeader } from '../TodoHeader';
import { TodoTitle } from '../TodoTitle';
import { TodoSearch } from '../TodoSearch';

import './App.css'

function App() {

  const {
    searchValue,
    setSearchValue,
  } = useTodos();
  return (
    <>
      <TodoHeader>
       <TodoTitle />
       <TodoSearch 
        searchValue = {searchValue}
        setSearchValue = {setSearchValue}
      />
      </TodoHeader>
    </>
  )
}

export default App
