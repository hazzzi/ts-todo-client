import React from 'react'

type Props = TodoProps

const Todo: React.FC<Props> = ({ todo }) => {
    return (
        <div className="Card">
            <div className="Card--text">
                <h1>{todo.name}</h1>
                <span>{todo.description}</span>
            </div>
            <div className="Card--button">
                <button className="Card--button__done">complete</button>
                <button className="Card--button__delete">delete</button>
            </div>
        </div>
    )
}

export default Todo