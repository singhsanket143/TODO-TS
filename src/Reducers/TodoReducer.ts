import TodoState from "../Interfaces/TodoState";
import Action from "../Types/Action";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "../Constants/ActionConstants";
function TodoReducer(state : TodoState, action : Action) : TodoState {
    if(action.type == ADD_TODO) {
        const nextId = (state.todoList.length == 0) ? 1 : state.todoList[state.todoList.length - 1].id + 1;
        const { text } = action.payload as { text: string};
        if(!text) return state;
        return {
            todoList: [
                ...state.todoList,
                {
                    id: nextId,
                    text: text,
                    completed: false
                }
            ]
        }
    } else if(action.type == TOGGLE_TODO) {
        const { id } = action.payload as { id: number};
        if(!id) return state;
        return {
            todoList: state.todoList.map(todo => (todo.id == id) ? {...todo, completed: !todo.completed} : todo)
        }
    } else if(action.type == DELETE_TODO) {
        const { id } = action.payload as { id: number};
        if(!id) return state;
        return {
            todoList: state.todoList.filter(todo => todo.id != id)
        }
    }
    return state;
}

export default TodoReducer;