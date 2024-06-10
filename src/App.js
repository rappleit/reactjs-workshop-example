import { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import TaskCard from './components/TaskCard';
import TaskForm from './components/TaskForm';
import { TodoContext } from './context/TodoContext';

function App() {
  const {tasks} = useContext(TodoContext);
  return (
    <div className="App">
      <Header/>
      <div className="todo_content">
        <TaskForm/>
        <div>
        {tasks.map((task, index) => (
          <TaskCard {...{title: task.title, desc: task.desc, deadline: task.deadline, id: task.id}} key={index}/>
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
