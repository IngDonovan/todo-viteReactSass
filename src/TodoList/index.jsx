import React from 'react';
import './TodoList.scss';

function TodoList (props) {
  const renderFunc = props.children || props.render;

  return(
    <section className = 'container' >
      {props.loading && props.onLoading()}
      {props.error && props.onError()}
      {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}
      {(!!props.totalTodos && !props.searchedTodos.length) && props.onEmptyResultTodos(props.searchText)}
      {/* // {!props.loading && props.searchedTodos.map(renderFunc)} */}
      <ul className = 'list'>
        {(!props.loading && !props.error) && props.searchedTodos.map(renderFunc)}
        {/* {children} */}
      </ul>
    </section>
  );
}

  export { TodoList };