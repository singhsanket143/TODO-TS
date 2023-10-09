import { useContext } from "react";
import TodoContext from "../Context/TodoContext";

function useTodoContext() {
    const context = useContext(TodoContext);
    if(context == undefined) throw new Error('Context is undefined');
    return context;
}

export default useTodoContext;