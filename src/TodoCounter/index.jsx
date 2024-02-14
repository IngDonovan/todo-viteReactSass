import React from 'react';
import './TodoCounter.scss';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

  const { 
    loading, 
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext);

  if (!loading) {
    if (totalTodos === 0) {
      return (
        <h2>
          Escribe tu primera tarea
        </h2>
      );
    } else if (totalTodos === completedTodos) {
      return (
        <h2 className='textCounter'>Felicidades, completaste todas las tareas!!!</h2>
      );
    } else {
      return (
        <h2>
          Has completado {completedTodos} de {totalTodos} tareas
        </h2>
      );
    }
  } else {
     return;
 }
}

  export { TodoCounter };