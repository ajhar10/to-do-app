import React from 'react'
import './ToDo.css'

function ToDo() {
    const submitHandler = (e) => {
        e.preventDefault();

        const taskName = e.target.taskName.value;
        const description = e.target.description.value
        const todo = { taskName, description }

        // Send data to server
        fetch('https://boiling-plateau-31043.herokuapp.com/todos', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Success', data)
                alert('data Added Successfully')
                e.target.reset()
            })
    }


    return (
        <div className="container">
            <div className="row justify-content-center align-items-center main-row">
                <div className="col shadow main-col bg-white">
                    <div className="row bg-primary text-white">
                        <div className="col  p-2">
                            <h4 className='text-center'>Todo App</h4>
                        </div>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="row justify-content-between text-white p-2">
                            <div className="form-group flex-fill mb-2 col-9">
                                <input id="todo-input" type="text" className="form-control" name='taskName' placeholder='Task name' required />
                                <textarea type="text" class="form-control my-2" name="description" placeholder="Description" required />
                            </div>
                            <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add todo</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ToDo