import React from 'react';
import { useSearchParams } from 'react-router-dom';
// import { TodoContext } from '../TodoContext';
import './TodoSearch.scss'

function TodoSearch({loading, searchValue, setSearchValue}) {
  // const { 
  //   loading,
  //   searchValue,
  //   setSearchValue 
  // } = React.useContext(TodoContext);
  const [searchParams, setSearchParams] = useSearchParams();
  // Función para actualizar el valor de búsqueda en la URL
  const paramsValue = searchParams.get('search');

  const updateSearchParams = (value) => {
    setSearchParams({ search: value });
  };
  if (paramsValue) {
    setSearchValue(paramsValue);
  };

  return (
    <div className="cont">
      <section className="cont-box">
        <input
          placeholder="Busca tu tarea"
          // value={searchValue}
          value={paramsValue ?? ''}
          onChange={(event) => {
            const value = event.target.value;
            setSearchValue(value);
            updateSearchParams(value);
          }}
          disabled={loading}
        />
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 23L10 14.5"
            stroke="#8A8A8A"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M24 9C24 13.9706 19.9706 18 15 18C10.0294 18 6 13.9706 6 9C6 4.02944 10.0294 0 15 0C19.9706 0 24 4.02944 24 9ZM9.23834 9C9.23834 12.1821 11.8179 14.7617 15 14.7617C18.1821 14.7617 20.7617 12.1821 20.7617 9C20.7617 5.81792 18.1821 3.23834 15 3.23834C11.8179 3.23834 9.23834 5.81792 9.23834 9Z"
            fill="#8A8A8A"
          />
          <circle cx="15" cy="9" r="2" fill="#8A8A8A" />
        </svg>
      </section>
    </div>
  );
}

export { TodoSearch };