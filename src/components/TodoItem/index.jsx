import { DeleteIcon } from '../TodoIcon/DeleteIcon'
import { CheckIcon } from '../TodoIcon/CheckIcon'
import { EditIcon } from '../TodoIcon/EditIcon'
import './TodoItem.scss'

function TodoItem (props) {

    return(
      <li className="TodoItem">
        <CheckIcon 
            completed={props.completed}
            onClick={props.onComplete}
        />          
        <p 
          className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : ''}`}>
          {props.text}
        </p>

        <EditIcon
          onClick = {props.onEdit}  
        />
        
        <DeleteIcon 
          onClick = {props.onDelete}  
        />
        
        
      </li>
    );
  }
  export { TodoItem };