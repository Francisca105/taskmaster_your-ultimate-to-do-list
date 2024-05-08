import React, { useEffect, useState } from 'react';
import Header from './Header'
import Add from './Add'
import Task from './Task'
import Footer from './Footer'

import './App.css';

const api = 'http://localhost:5000/'
interface TaskData {
  id: number;
  task: string;
  status: boolean;
  date: string;
}

function App() {
  const [tasks, setTasks] = useState<TaskData[]>([]);

  useEffect(() => {
    try {
      fetch(api + 'tasks')
      .then(res => res.json())
      .then(data => {
        setTasks(data)
      }) 
    } catch (error) {
      console.error(error)
    }
  }, []);

  console.log(tasks)

  return (
    <div className="App">
      <Header />
      <div className="main">
        <h1>Create a new Task</h1>
        <Add api={api}/>
      </div>
      <br style={{ marginBottom: '50px' }}/>
      <div>
        <h2>TO-DO LIST</h2>
        {tasks.map(task => (
          <Task key={task.id} id={task.id} task={task.task} date={task.date} status={task.status} api={api}/>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
