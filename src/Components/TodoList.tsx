import TodoComponent from "./Todo";
import Todo from "../Interfaces/Todo";
import useTodoContext from "../Hooks/useTodoContext";
import AddTodo from "./AddTodo";

function TodoList() {

    const {state} = useTodoContext();

    return (
        <>
            <h1>Todo List</h1>
            <AddTodo />
            {state.todoList.map((todo : Todo) => <TodoComponent key={todo.id} text={todo.text} completed={todo.completed} id={todo.id} />)}
        </>
    )
}

export default TodoList;