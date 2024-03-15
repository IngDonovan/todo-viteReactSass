import React from 'react';
import { TodoIcon } from '.'

function EditIcon({onClick}) {
    return (
        <TodoIcon 
            type="edit"
            color="gray"
            onClick={onClick}
        />
    );
}

export { EditIcon };