interface TodoItemsProps {
  index: number;
  todo: string;
  onDeleteTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemsProps> = ({ index, todo, onDeleteTodo }) => {
  return (
    <li className="flex items-center bg-transparent p-2 my-2 justify-between">
      <p>{todo}</p>
      <button
        onClick={() => onDeleteTodo(index)}
        className="bg-transparent border-0 outline-0"
      >
        X
      </button>
    </li>
  );
};

export default TodoItem;
