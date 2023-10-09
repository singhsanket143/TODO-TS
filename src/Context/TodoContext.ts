import { createContext } from "react";
import TodoContextType from "../Types/TodoContextType";

const todoContext = createContext<TodoContextType | undefined>(undefined);

export default todoContext;

/**
 * 
 * <Provider value={{state, dispatch}}> </Provider>
 */