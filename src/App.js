import logo from './logo.svg';
import './App.css';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';

function App() {
  return (
    <div className="App flex flex-col justify-center items-center bg-orange-100 p-2">
      <h1 className="font-bold text-2xl">TODO LIST with Redux</h1>
      <AddTodo/>
      <Todo/>
    </div>
  );
}

export default App;
