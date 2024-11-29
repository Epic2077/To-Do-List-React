import Header from "./components/Header";
import TodoInput from "./components/TodoInput";

function App() {
  return (
    <div className="w-screen h-screen grid justify-center items-center bg-blue-900">
      <div className="w-[60vw] bg-gray-300 rounded-[20px] min-h-[40vw]  px-[24px] py-[32px]">
        <Header />
        <TodoInput />
      </div>
    </div>
  );
}

export default App;
