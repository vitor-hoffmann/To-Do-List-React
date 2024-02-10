import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [checkedTasks, setCheckedTasks] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setCheckedTasks([...checkedTasks, false]);
      setNewTask('');
      setTimeout(() => {
        const elements = document.querySelectorAll('.list');
        const lastElement = elements[elements.length - 1];
        if (lastElement) {
          lastElement.classList.add('fade-in');
          setTimeout(() => {
            lastElement.classList.remove('fade-in');
          }, 1000);
        }
      }, 0);
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    const updatedCheckedTasks = [...checkedTasks];
    updatedTasks.splice(index, 1);
    updatedCheckedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setCheckedTasks(updatedCheckedTasks);
  };
  
  const handleCheckboxChange = (index) => {
    const updatedCheckedTasks = [...checkedTasks];
    updatedCheckedTasks[index] = !updatedCheckedTasks[index];
    setCheckedTasks(updatedCheckedTasks);
  };

  return (
    <div id='div-geral'>
      <div id='div-title'>
        <h1 id='text'>To-Do List</h1>
        <div id='input'>
          <input
            id='in'
            placeholder='New task'
            className='textin'
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>
      </div>

      <div id='div-tasks'>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className={`list ${checkedTasks[index] ? 'Checked' : ''}`}>
              <div id='buttons2'>
                <button onClick={() => handleCheckboxChange(index)}>Done</button>
                <button className='button' onClick={() => removeTask(index)}>Remove</button>
              </div>
              {index + 1} - {task}
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
