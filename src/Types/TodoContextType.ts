import React from "react";
import TodoState from "../Interfaces/TodoState";
import Action from "./Action";

type TodoContextType = { 
    state: TodoState;
    dispatch: React.Dispatch<Action>;
}

export default TodoContextType;