import { createContext } from "react";
import TodoContextType from "../Types/TodoContextType";

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export default TodoContext;

/**
 * 
 * <Provider value={{state, dispatch}}> </Provider>
 */