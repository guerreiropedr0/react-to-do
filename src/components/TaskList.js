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
    e.target.reset();
  };

  const handleClick = (id) => {
    const newList = tasks.everyTask.filter((task) => task.id !== id);
    for (let i = id; i < newList.length; i += 1) {
      newList[i].id -= 1;
    }

    setTasks({
      everyTask: newList,
    });
  };

  const handleBlur = (e) => {
    const newList = tasks.everyTask;
    newList[e.target.id].body = e.target.value;
    setTasks({
      everyTask: newList,
    });
  };

  const handleRemove = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <textarea type="text" placeholder="Things to do" />
      <input type="text" placeholder="Add Task" />
      <button onClick={handleRemove} type="button">
        Clear all completed
      </button>
      <AddTask tasks={tasks} handleBlur={handleBlur} />
      <RemoveTask tasks={tasks} handleClick={handleClick} />
    </form>
  );
};

export default TaskList;
