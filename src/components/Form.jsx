import React from 'react'

const Form = (props) => {

    const { addToList, setAddTodo, addTodo} = props

    return (
        <div>
            <form className="newTodo" onSubmit={(e) => {
                addToList(e);
                setAddTodo("")
            }}>
                <input type="text" className="newTodo" placeholder="Add new item" value={addTodo} onChange={(e) => {
                    props.setAddTodo(e.target.value)
                }} />
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    )
}

export default Form