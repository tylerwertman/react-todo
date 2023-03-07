import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

function App() {
  const [addTodo, setAddTodo]=useState("")
  const [allTodos, setAllTodos] = useState([])
  const todoCheck = {
    text: addTodo,
    complete: false
  }
  const addToList = (e) => {
    e.preventDefault()
    // console.log(addTodo)
    if(addTodo.length===0){
      return;
    }
    setAllTodos([...allTodos, todoCheck])
  }

  

  return (
    <div className="App">
      <h1 style={{textAlign:"left", marginLeft:"50px"}}>To Do List:</h1>
      <form className="newTodo" onSubmit={(e)=>{
        addToList(e);
        setAddTodo("")
      }}>
        <input type="text" className="newTodo" placeholder="Add new item" value={addTodo} onChange={(e)=>{
          setAddTodo(e.target.value)
        }} />
        <input type="submit" value="Add Todo"/>
      </form>
        <Todo allTodos={allTodos} addTodo={addTodo} setAllTodos={setAllTodos} todoCheck={todoCheck}/>
    </div>
  );
}

export default App;
