import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function ToDos() {
    const todos = useSelector(state => state.todos)
    const dispach = useDispatch()
  return (
    <>
        <div>Todos</div>
        {todos.map(todo => (
            <li key={todo.id}>
                {todo.text}
                <button onClick={() => dispach(removeTodo(todo.id))}>X</button>
            </li>
        ))}
    </>
  )
}

export default ToDos