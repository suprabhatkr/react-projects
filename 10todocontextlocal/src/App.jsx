import { useEffect, useState } from 'react'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => [ {id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
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

    </TodoProvider>
  )
}

export default App
