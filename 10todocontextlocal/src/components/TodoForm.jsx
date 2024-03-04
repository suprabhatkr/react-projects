import React, { useState } from 'react';
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState([])
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()
        if (!todo) return 

        addTodo({todo, completed: false})
        setTodo("")
    }
  return (
    <div>
      <form onSubmit={add} className='flex gap-2'>
      <input 
      className="bg-gray-100 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      type="text" 
      placeholder='Add todo ...'
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
      />
        <button 
        type="submit"
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
