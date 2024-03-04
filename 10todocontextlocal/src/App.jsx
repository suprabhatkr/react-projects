import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    console.log(todo)
    setTodos((prev) => [ {id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todoMsg) => {
    const todo = {id: id, todo: todoMsg, isCompleted: false}
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) => 
        prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo
      )    
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")))
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)) 
  }, [todos])

  return (
    <TodoProvider value = {{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className='flex justify-center p-20'>
        <div className='flex flex-col gap-2'>
          <TodoForm />
          {todos.map((todo) => <div key={todo.id}><TodoItem todo={todo}/></div>)}
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
