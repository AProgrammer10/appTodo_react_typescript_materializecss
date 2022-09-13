import React, {useRef, useState} from 'react'

interface TodoFormProps {
    onAddTodo(todo: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    //const [title, setTitle] = useState<string>('')
    const refTodo = useRef<HTMLInputElement>(null)

    /*const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }*/

    const keyPressHandler = (event: React.KeyboardEvent) => {

        if(event.key === 'Enter'){
            //console.log(title)
            //setTitle('')
            props.onAddTodo(refTodo.current!.value)
            refTodo.current!.value = ''
        }
    }


    return (
        <div className="input-field mt2">
          <input
            //value={title}
            //onChange={changeHandler}
            ref={refTodo}
            onKeyPress={keyPressHandler}
            placeholder="Enter todo" id="title" type="text" />
          <label className="active" htmlFor="title">Press Enter</label>
        </div>
    )
}