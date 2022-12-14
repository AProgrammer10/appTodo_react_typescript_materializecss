import React from 'react'
import {ITodo} from '../interfaces'

type TodoListProps = {
    todos: ITodo[]
    onToggle(id: number): void
    onRemove: (id: number) => void
}

export const TodoList: React.FC<TodoListProps> = ({todos, onToggle, onRemove}) => {

    if(todos.length === 0){
        return <h5 className='center teal-text text-lighten-1'>Enter your tasks!</h5>
    }

    const removeHandler = (event: React.MouseEvent, id: number) => {
        event.preventDefault()

        onRemove(id)
    }
    return (
        <ul>
            {todos.map((todo, index) => {
                
                const classes = ['todo']
                if(todo.completed){
                    classes.push('completed')
                }
                return (
                    <li className={classes.join(' ')} key={todo.id}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={todo.completed}
                                //onChange={onToggle.bind(null, todo.id)}
                                onChange={() => onToggle(todo.id)}
                            />
                            <span>{index+1}. {todo.title}</span>
                            <i 
                                className="material-icons red-text" 
                                onClick={event => removeHandler(event, todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
            
        </ul>
    )
}