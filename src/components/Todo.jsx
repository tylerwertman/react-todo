import React from 'react'

const Todo = (props) => {

    const { allTodos, setAllTodos} = props

    const selectedTodo = (idx) => {
        selectedTodo(idx)
    }

    const deleteFromList = (deleteI) => {
        const filteredTodos = allTodos.filter((list, i) => {
            return i !== deleteI
        })
        setAllTodos(filteredTodos)
    }

    const toggleChecked = (idx)=> {
        const updatedList = allTodos.map((list, i)=> {
            if (idx === i ){
                list.complete = !list.complete
            }
            return list
        }
        )
        setAllTodos(updatedList)
    }
    return (
        <div className='row'>
            {
                allTodos.map((list, i) =>{
                    const addClass= []
                    if (list.complete){
                        addClass.push("strike")
                    }
                    return (
                    <div key={i} className='todo' onClick={() => selectedTodo(i)} style={{
                        border: "2px solid black",
                        width: "400px",
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"

                    }}>
                        <div className="todoLeft">
                            <input type="checkbox" checked={list.complete} onChange={(e)=>{
                                toggleChecked(i)
                            }}/>
                            <h4 className={addClass}>{list.text}</h4>
                        </div>
                        <button onClick={()=>{deleteFromList(i)}}>Delete</button>


                    </div>
                )}
                )
            }

        </div>
    )
}

export default Todo