import React, { useEffect, useState } from 'react'
import { addTodo, getTodos } from './API'
import { AddTodo, TodoItem } from './components'

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    const fetchTodos = (): void => {
        getTodos()
            .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
            .catch((err: Error) => console.log(err))
    }

    const _handleSaveTodo = (e: React.FormEvent, todoForm: ITodo): void => {
        e.preventDefault()
        addTodo(todoForm).then(({ status, data }) => {
            if (status !== 201) {
                throw new Error("Error! Todo not saved")
            }
            setTodos(data.todos)
        }).catch(error => console.log(error))
    }

    return (
        <main className='App'>
            <h1>My Todos</h1>
            <AddTodo saveTodo={_handleSaveTodo} />
            {todos.map((todo: ITodo) => (
                <TodoItem key={todo._id} />
            ))}
        </main>
    )
}

export default App