import React, { useEffect, useState } from 'react'
import { getTodos } from './API'
import { AddTodo } from './components'

const App: React.FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        // fetchTodos()
    }, [])

    const fetchTodos = (): void => {
        getTodos()
            .then(({ data: { todos } }: ITodo[] | any) => setTodos(todos))
            .catch((err: Error) => console.log(err))
    }

    const _handleSaveTodo = (e: React.FormEvent, todoForm: ITodo): void => {
        e.preventDefault()
        console.log(todoForm)
    }

    return (
        <main className='App'>
            <h1>My Todos</h1>
            <AddTodo saveTodo={_handleSaveTodo} />
        </main>
    )
}

export default App