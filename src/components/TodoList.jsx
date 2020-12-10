import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
    }

    const completeTodo = id => {

    }

    return (
        <>
            <h1>What's plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos}
                  completeTodo={completeTodo}
            />
        </>
    )
}

export default TodoList