import React, { useState } from 'react'

function Form() {

    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleChange = (e) => {
        setName(e.target.value);
    }




  return (
    <div className="form-container">
        <form action="" className="task-form" onSubmit={handleSubmit}>
            <input type="text" className="task-input" value={name} onChange={handleChange} />
            <button className="add-btn" type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Form