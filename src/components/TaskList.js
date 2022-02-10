import { useState } from 'react';
import AddTask from './AddTask';
import RemoveTask from './RemoveTask';

const TaskList = () => {
  const [tasks, setTasks] = useState({
    everyTask: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks({
      everyTask: [
        ...tasks.everyTask,
        {
          body: e.target[1].value,
          id: tasks.everyTask.length,
        },
      ],
    });
  };

  const handleClick = (id) => {
    const newList = tasks.everyTask.filter((task) => task.id !== id);
    setTasks({
      everyTask: [...newList],
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea type="text" placeholder="Things to do" />
      <input type="text" placeholder="Add Task" />
      <button type="button">Clear all completed</button>
      <AddTask tasks={tasks} />
      <RemoveTask tasks={tasks} handleClick={handleClick} />
    </form>
  );
};

export default TaskList;
