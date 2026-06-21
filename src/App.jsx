import { useState } from 'react'
import './App.css'

// создать const для 
// создать input и кнопку submit для TO-DO List

function TodoList() {
     const [inputValue, setInputValue] = useState("");
     const [todos, setTodos] = useState([]);
 function AddNewTask() {
    if (inputValue.trim() !== '' ) {
        const newTodo =  {
            id: Date.now(),
            text: inputValue,
            isComplete: false
        }

        setTodos([...todos, newTodo]);

        setInputValue("")
    }
 }

 return (
    <div>
    <input className='inpur' value={inputValue} onChange={(e) => setInputValue(e.target.value)}placeholder='add new task'></input>
    <button className='butto' onClick={AddNewTask}>NEW TASK</button>
       <ul>
        {todos.map((todo) => (
<li key={todo.id}>{todo.text}</li>
        ))}
       </ul>
    </div>
 );
}
export default TodoList;