import React, { useState } from 'react'

type Props = {
    saveTodo: (e: React.FormEvent, todoForm: ITodo | any) => void
}

const AddTodo: React.FC<Props> = ({ saveTodo }) => {
    const [todoForm, setTodoForm] = useState<ITodo | {}>()

    const _handleChangeFrom = (e: React.FormEvent<HTMLInputElement>): void => {
        setTodoForm({
            ...todoForm,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }

    return (
        <form className="Form" onSubmit={(e) => saveTodo(e, todoForm)}>
            <div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' onChange={_handleChangeFrom} />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input type='text' id='description' onChange={_handleChangeFrom} />
                </div>
            </div>
            <button>Add Todo</button>
        </form>
    )
}

export default AddTodo