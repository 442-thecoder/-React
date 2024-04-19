// App.js
import React, { useState } from 'react';
import './App.css';
import { addToDo, deleteToDo, updateToDo } from './RTK/Store';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const [text, setText] = useState('');
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState('');
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      const newTodo = {
        id: Math.round(Math.random() * 1000),
        text: text
      };
      dispatch(addToDo(newTodo));
      setText('');
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteToDo(id));
  };

  const handleEditTodo = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleUpdateTodo = (id) => {
    if (editText.trim() !== '') {
      dispatch(updateToDo({ id, text: editText }));
      setEditId(null); // Exit edit mode
    }
  };

  return (
    <div>
      <h1>MY TODO</h1>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleAddTodo}>Add</button>
      <div>
        {todos && todos.map((todo) => (
          <div key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleUpdateTodo(todo.id)}>Update</button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button onClick={() => handleEditTodo(todo.id, todo.text)}>Edit</button>
                <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
