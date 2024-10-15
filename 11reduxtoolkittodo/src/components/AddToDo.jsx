import React,{useState} from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'


function AddToDo() {
    const [input,setInput] = useState('')
    const dispach = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispach(addTodo(input))
        setInput('')
    }
  return (
    <form onSubmit={addTodoHandler}>
      <input type="text" 
      placeholder='Enter a todo...'
      value={input}
      onChange={e => setInput(e.target.value)}
      />
      <button type='submit'>Add</button>
    </form>
  )
}

export default AddToDo