import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@pages/Home';
import { AddTodo } from '@pages/AddTodo';
import { EditTodo } from '@pages/EditTodo';


function AppRoutes() {
   return (
      <HashRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/add' element={<AddTodo />}/>
          <Route path='/edit/:id' element={<EditTodo />}/>
        </Routes>
      </HashRouter>
  );
}

export { AppRoutes };