const RemoveTask = (props) => {
  const prop = props;

  return (
    <div>
      {prop.tasks.everyTask.map((task) => (
        <button onClick={() => prop.handleClick(task.id)} type="button" key={task.body}>
          Remove
        </button>
      ))}
    </div>
  );
};

export default RemoveTask;
