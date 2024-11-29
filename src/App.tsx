import React, { useState } from "react";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((todo: string, i: number) => i !== index));
  };

  return (
    <div className="w-screen h-screen grid justify-center items-center bg-blue-900">
      <div className="w-[60vw] bg-gray-300 rounded-[20px] min-h-[40vw]  px-[24px] py-[32px]">
        <Header />
        <TodoInput onAddTodo={addTodo} />
        <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
