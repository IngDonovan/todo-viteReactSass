import React from 'react';
import './TodoList.scss';

function TodoList (props) {
    return(
      <section className = 'container' >
        {props.loading && props.onLoading()}
        {props.error && props.onError()}
        {(!props.loading && !props.searchedTodos.length) && props.onEmptyTodos()}

        <ul className = 'list'>
          {props.searchedTodos.map(props.render)}
          {/* {children} */}
        </ul>
      </section>
    );
  }

  export { TodoList };