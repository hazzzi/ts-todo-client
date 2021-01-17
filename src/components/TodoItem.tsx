import React from 'react'

type Props = TodoProps & {
    deleteTodo: (_id: string) => void
}

// todo 완료 로직 추가
// todo 삭제 로직 추가
const Todo: React.FC<Props> = ({ todo, deleteTodo }) => {
    return (
        <div className="Card">
            <div className="Card--text">
                <h1>{todo.name}</h1>
                <span>{todo.description}</span>
            </div>
            <div className="Card--button">
                <button className="Card--button__done">complete</button>
                <button className="Card--button__delete" onClick={() => deleteTodo(todo._id)}>delete</button>
            </div>
        </div>
    )
}

export default Todo