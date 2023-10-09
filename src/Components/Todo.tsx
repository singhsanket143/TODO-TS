import useTodoContext from "../Hooks/useTodoContext";
import { TOGGLE_TODO, TOGGLE_TODO_TYPE } from "../Constants/ActionConstants";
function Todo({ text, completed, id} : {text: string, completed: boolean, id: number}) {

    const {dispatch} = useTodoContext();

    function handleTodoToggle() {
        dispatch({type: TOGGLE_TODO as TOGGLE_TODO_TYPE, payload: {id: id}});
    }

    return (
        <li>
            {text}
            { " " }
            <input 
                type="checkbox"
                checked={completed}
                onChange={handleTodoToggle}
            />
        </li>
    )
}

export default Todo;