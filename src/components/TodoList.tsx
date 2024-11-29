import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: string[];
  onDeleteTodo: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDeleteTodo }) => {
  return (
    <ul className="w-full list-none flex flex-col">
      {todos.map((todo, index) => (
        <TodoItem
          key={index}
          index={index}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
