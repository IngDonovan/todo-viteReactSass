import React from "react";
import { useLocalStorage } from "../useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sync: sincronizeTodos,
  } = useLocalStorage("TASK_V2", []);

  const [searchValue, setSearchValue] = React.useState("");
  // const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length; //doble negación para convertirlo si o si a boolean
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return todoText.includes(searchText);
    });
  }
  //   const searchedTodos = todos.filter((todo) => {
  //     const todoText = todo.text.toLowerCase();
  //     const searchText = searchValue.toLocaleLowerCase();
  //     return todoText.includes(searchText);
  //   });//need performance

  const addTodo = (text) => {
    const id = newTodoId(todos);
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
      id,
    });
    saveTodos(newTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    // newTodos[todoIndex].completed = true;
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const editTodo = (id, newText) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    // newTodos[todoIndex].completed = true;
    newTodos[todoIndex].text = newText;
    saveTodos(newTodos);
  };

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return {
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        editTodo,
        deleteTodo,
        // openModal,
        // setOpenModal,
        sincronizeTodos,
      };
}

function newTodoId(todoList) {
  if (!todoList.length) {
    return 1;
  }
  const idList = todoList.map(todo => todo.id);
  const idMax = Math.max(...idList);
  return idMax + 1;
}

export { useTodos };
