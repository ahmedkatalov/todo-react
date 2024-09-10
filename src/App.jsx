import { useState, useEffect } from "react";
import uuid4 from "uuid4";
import { Tas } from "./TodoContent";

function App() {
  const [values, setValue] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (values !== "") {
      const newItem = {
        items: values,
        checked: false,
        id: uuid4(),
      };
      setTodos([...todos, newItem]);
    } else {
      alert("Заполните инпут");
    }
    setValue("");
  };


  const removeTask = (id) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="container">
        <div className="addTodo">
          <input
            className="inputAddTodo"
            value={values}
            onChange={(e) => setValue(e.target.value)}
            type="text"
          />
          <button className="buttonAdd" onClick={addTodo}>Add</button>
        </div>
        {Array.isArray(todos) && todos.length > 0 && (
          <Tas todo={todos} removeTask={removeTask} />
        )} 
      </div>
    </>
  );
}

export default App;