const RemoveTask = (props) => {
  const prop = props;

  return (
    <div>
      {prop.tasks.everyTask.map((task) => (
        <div key={task.body} className="remove">
          <input id={task.id} onClick={prop.handleCheck} type="checkbox" />
          <button onClick={() => prop.handleClick(task.id)} type="button" key={task.body}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default RemoveTask;
