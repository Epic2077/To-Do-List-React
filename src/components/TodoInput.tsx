import { useState } from "react";

interface TodoInputProps {
  onAddTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    if (input.trim() === "") return;
    console.log("Submitted Todo:", input);
    onAddTodo(input);
    setInput("");
  };

  return (
    <div className="w-full bg-gray-200 flex h-[60px] rounded-[35px] mt-5">
      <input
        type="text"
        name="addTask"
        value={input}
        id="addTask"
        placeholder="Add a task..."
        onChange={(e) => setInput(e.target.value)}
        className="bg-transparent border-0 outline-none rounded-[35px] pl-[24px] text-black w-full z-110"
      />
      <button
        onClick={handleAddTodo}
        className="ml-auto text-white bg-orange-600 rounded-[35px] h-full w-[150px] p-[10px]"
      >
        Add Task
      </button>
    </div>
  );
};
export default TodoInput;
