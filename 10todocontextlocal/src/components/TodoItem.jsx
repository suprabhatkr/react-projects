import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoItem({todo}) {
    const {toggleComplete, deleteTodo, updateTodo} = useTodo()
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isEditable, setIsEditable] = useState(false)

    const editTodo = () => {
        updateTodo(todo.id, todoMsg)
        setIsEditable(false)
    }
    
  return (
    <div className='flex gap-2'>
      <input 
      type='text'
      value={todoMsg}
      onChange={(e) => {setTodoMsg(e.target.value)}}
      readOnly={!isEditable}
      className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200"/>
      <button 
      className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
      type="submit"
      onClick={() => {isEditable ? editTodo() : setIsEditable((prev) => !prev)}}>
        {isEditable ? "Save" : "Update"}
      </button>
      <button 
      type="submit" 
      className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
      onClick={() => {deleteTodo(todo.id)}}
      >Delete</button>
    </div>
  )
}

export default TodoItem;