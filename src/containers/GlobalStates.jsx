import React, {useState} from 'react';
import TodoContext from '../context/todoContext';
import { v4 as uuidv4} from "uuid";
import { toast } from 'react-toastify';

export default function GlobalStates(props) {
    const [getTodos, setTodos] = useState([]);
    const [getTodo, setTodo] = useState("");
    const handleCreateNewTodo = () => {
        const todos = [...getTodos];
        const todo = {
            id: uuidv4(),
            text: getTodo,
            completed: false
        };
        if (getTodo !== "" && getTodo !== " ") {
            todos.push(todo);
            setTodos(todos);
            setTodo("");
         
          //toastify new 
          toast.success(`${getTodo} was added successfully`,{
            position: "bottom-right",  
            closeButton: true,
          });
        }
    };

    const handleCompletedTodo = id => {
        const todos = [...getTodos];
        const todoIndex = todos.findIndex(t => t.id === id);
        const todo = todos[todoIndex];
        todo.completed = !todo.completed;
        todos[todoIndex] = todo;
        setTodos(todos);
    };

    const handleDeleteTodo = id => {
        const todos = [...getTodos];
        const filteredTodos = todos.filter(t => t.id !== id);
        setTodos(filteredTodos);
        toast.error(`Task was deleted successfully!`,{
            position:"bottom-right"
            })
    };

    const handleTodoInput = event => {
        setTodo(event.target.value);
    };




    return (
        <div>
        <TodoContext.Provider
         value={{
                todos: getTodos,
                todo: getTodo,
                handleCreateNewTodo: handleCreateNewTodo,
                handleTodoInput: handleTodoInput,
                handleCompletedTodo: handleCompletedTodo,
                handleDeleteTodo: handleDeleteTodo
            }}
        >
         {props.children}
        </TodoContext.Provider>
        </div>
    )
}
