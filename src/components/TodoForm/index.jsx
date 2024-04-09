import React from 'react';
import { useNavigate } from 'react-router-dom';
// import { TodoContext } from '../TodoContext';
import './TodoForm.scss';

function TodoForm({
    submitEvent,
    label,
    submitText,
    // addTodo, 
    // setOpenModal
    }) {

    // const {
    //     addTodo,
    //     setOpenModal,
    // } = React.useContext(TodoContext);
    const navigate = useNavigate();
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit = (event)=>{
        event.preventDefault();//evita que se recargue la pagina
        submitEvent(newTodoValue);
        navigate('/');
        // addTodo(newTodoValue);
        // setOpenModal(false);
    };

    const onCancel = ()=>{
        // setOpenModal(false);
        navigate('/');
    };

    const onChange = (event)=>{
        setNewTodoValue(event.target.value);
    };
    return (
        <form className='TodoForm-Container'
            onSubmit={onSubmit}>
            <label>{label}</label>
            <textarea 
                placeholder='...'
                value = {newTodoValue}
                onChange={onChange}
                required
            />
            <div className='TodoForm-buttonContainer'>
                <button 
                    type="button" 
                    className='TodoForm-button TFB--cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    className='TodoForm-button TFB--add'>
                    {submitText}
                </button>
            </div>
        </form>
    );
}

export { TodoForm };