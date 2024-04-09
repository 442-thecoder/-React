import React, { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, delTodo, updateTodoText } from './redux/Action';

const App = () => {
  const [todoText, setTodoText] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const Todo = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (todoText.trim() !== '') { // Check if todoText is not empty or only whitespace
      dispatch(addTodo(Math.round(Math.random() * 1000), todoText.trim())); // Trim any whitespace from the input
      setTodoText(''); // Clearing the input value
    }
  };

  const handleEditTodo = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSaveTodo = (id) => {
    dispatch(updateTodoText(id, editText));
    setEditId(null); // Exit edit mode
  };

  return (
    <div>
      <h1>MY TODO</h1>
      <input  type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
      <button onClick={handleAddTodo}>ADD</button>
     
      <div>
        {Todo && Todo.map((todo, index) => (
          <div key={index}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleSaveTodo(todo.id)}>Save</button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  value={todo.text}
                  readOnly // Make the input field read-only
                />
                <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
                <button onClick={() => dispatch(delTodo(todo.id))}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
