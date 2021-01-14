import React from 'react'

const AddTodo: React.FC = () => {
    return (
        <form className="Form" >
            <div>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <input type='text' id='description' />
                </div>
            </div>
            <button>Add Todo</button>
        </form>
    )
}

export default AddTodo