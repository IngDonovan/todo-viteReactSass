import React from 'react';
import './CreateTodoButton.scss'

function CreateTodoButton ({onClick}) {

    return(
        <button type="button"
            className='addTask' 
            // onClick={(event) => {
            //     setOpenModal((value)=>!value)
            //     }}
            onClick={onClick}
            >
            <svg width="40" height="40" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 3V53" stroke="#8A8A8A" strokeWidth="5" strokeLinecap="round"/>
                <path d="M3 28L53 28" stroke="#8A8A8A" strokeWidth="5" strokeLinecap="round"/>
            </svg>
        </button>
    );
  }

  export { CreateTodoButton };