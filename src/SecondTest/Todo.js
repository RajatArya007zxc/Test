import React,{useState} from "react";
import Form from './Form'





function Todo() {
  const [todos, setTodos] = useState([
    {
      text: "First task",
      
    },
    {
      text: "Second Task",
      
    },
    {
      text: "Third Task",
      
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  

  return (
    <div className="app">
        <Form addTodo={addTodo} />
      <ul style={{'list-style-type':"none"}}>
        {todos.map((todo, index) => (
          <li key={index}>{todo.text}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default Todo;