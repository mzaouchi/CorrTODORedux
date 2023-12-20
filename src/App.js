import './App.css';
import AddTask from './Components/AddTask';
import FilterTask from './Components/FilterTask';
import ListTasks from './Components/ListTasks';

function App() {
  return (
    <div>
      <h1>TODOLIST</h1>
      <FilterTask/>
      <ListTasks/>
      <br/>
      <br/>
      <AddTask/>
    </div>
  );
}

export default App;
