interface TodoListProps {
  todos: string[];
  onDeleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="w-full list-none">
      {todos.map((todo, index) => (
        <li key={index}>
          <p>{todo}</p>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
