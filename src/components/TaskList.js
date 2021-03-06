import { useEffect, useState } from 'react';
import AddTask from './AddTask';
import RemoveTask from './RemoveTask';

const TaskList = () => {
  const [title, setTitle] = useState('Things to do');
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks({
      everyTask: [
        ...tasks.everyTask,
        {
          body: e.target[1].value,
          id: tasks.everyTask.length,
          checked: false,
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

  const handleRemove = () => {
    let newList = tasks.everyTask;
    newList = newList.filter((task) => task.checked !== true);
    for (let i = 0; i < newList.length; i += 1) {
      newList[i].id = i;
    }

    setTasks({
      everyTask: newList,
    });
  };

  const handleCheck = (e) => {
    const newList = tasks.everyTask;
    newList[e.target.id].checked = e.target.checked;
    setTasks({
      everyTask: newList,
    });
  };

  return (
    <form className="task-list" onSubmit={handleSubmit}>
      <textarea
        type="text"
        placeholder={title || 'Things to do'}
        onBlur={(e) => setTitle(e.target.value)}
      />
      <input type="text" placeholder="Add Task" />
      <button onClick={handleRemove} type="button">
        Clear all completed
      </button>
      <AddTask tasks={tasks} handleBlur={handleBlur} />
      <RemoveTask tasks={tasks} handleClick={handleClick} handleCheck={handleCheck} />
    </form>
  );
};

export default TaskList;
