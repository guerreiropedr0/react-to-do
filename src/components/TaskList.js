import { useState } from 'react';
import AddTask from './AddTask';

const TaskList = () => {
  const [tasks, setTasks] = useState({
    everyTask: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks({
      everyTask: [...tasks.everyTask, e.target[1].value],
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <textarea type="text" placeholder="Things to do" />
      <input type="text" placeholder="Add Task" />
      <button type="button">Clear all completed</button>
      <AddTask tasks={tasks} />
    </form>
  );
};

export default TaskList;
