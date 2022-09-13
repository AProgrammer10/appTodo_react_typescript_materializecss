import React, {useState, useEffect} from 'react'
import {TodoForm} from '../components/TodoForm'
import {TodoList} from '../components/TodoList'
import {ITodo} from '../interfaces'

declare var confirm: (question: string) => boolean 

export const TodosPage: React.FC = () => {


  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addHandlerTodo = (title: string) => {
    
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    //setTodos(prev =>[...prev, newTodo])
    setTodos([...todos, newTodo])
  }

  const toggleHandler = (id: number) => {
        
    setTodos(todos.map(todo => {

        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }

  const removeHandler = (id: number) => {
    
    //const shoudRemove = window.confirm('Are you sure to delete task?')
    const shoudRemove = confirm('Are you sure to delete task?')
    if(shoudRemove){
      setTodos(todos.filter(todo => todo.id !== id))
    }
  }

  return (
    <React.Fragment>
        <TodoForm onAddTodo={addHandlerTodo} /> 
        <TodoList 
            todos={todos}
            onToggle={toggleHandler}
            onRemove={removeHandler}
        />  
    </React.Fragment>   
  )     
} 