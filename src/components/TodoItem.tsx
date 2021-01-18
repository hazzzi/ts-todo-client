import React from 'react'

type Props = TodoProps & {
    deleteTodo: (_id: string) => void
    updateTodo: (todo: ITodo) => void
}

const Todo: React.FC<Props> = ({ todo, deleteTodo, updateTodo }) => {
    const checkTodo: string = todo.status ? 'line-through' : ""

    return (
        <div className="Card">
            <div className="Card--text">
                <h1 className={checkTodo}>{todo.name}</h1>
                <span className={checkTodo}>{todo.description}</span>
            </div>
            <div className="Card--button">
                <button className={todo.status ? 'hide-button' : "Card--button__done"} onClick={() => updateTodo(todo)}> complete</button>
                <button className="Card--button__delete" onClick={() => deleteTodo(todo._id)}>delete</button>
            </div>
        </div>
    )
}

export default Todo