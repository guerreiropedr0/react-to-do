const AddTask = (props) => {
  const prop = props;

  return (
    <div>
      {prop.tasks.everyTask.length === 0
        ? null
        : prop.tasks.everyTask.map((task) => (
          <textarea id={task.id} key={task.body} defaultValue={task.body} />
        ))}
    </div>
  );
};
export default AddTask;
