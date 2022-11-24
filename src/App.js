import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, SetEditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      const editTodo = todos.find((i) => i.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      SetEditId(0);
      setTodo("");
      return;
    }
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
    else{
      alert('Plz Enter Items !!!');
    }
  };
  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };
  const handleEdit = (id) => {
    const editTodo = todos.find((i) => i.id === id);
    setTodo(editTodo.todo);
    SetEditId(id);
  };
  return (
    <div className="App">
      <div className="container">
        <h2><i class="fa-solid fa-list-check"/>Todo List App</h2>
        <form className="todoform" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Items ...."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button >{editId ? <i class="fa-solid fa-check"></i>: <i class="fa-solid fa-plus"></i>}</button>
        </form>
        <ul className="alltodo">
          {todos.map((t) => (
            <li className="singletodo">
              <span className="todotext" Key={t.id}>
                {t.todo}
              </span>
              <button onClick={() => handleEdit(t.id)}><i class="fa-solid fa-pen-to-square"></i></button>
              <button onClick={() => handleDelete(t.id)}><i class="far fa-trash-alt"></i></button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
