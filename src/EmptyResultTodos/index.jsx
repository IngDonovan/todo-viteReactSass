import React from "react";
import './EmptyResultTodos.scss'

function EmptyResultTodos({searchText}) {

    return (
        <p>No hay resultados para {searchText}</p>
    );
}

export { EmptyResultTodos };