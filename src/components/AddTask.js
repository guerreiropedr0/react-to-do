const AddTask = ({ tasks }) => {
  <div>
    {tasks.everyTask.map((task) => (
      <textarea key={task} defaultValue={task} />
    ))}
  </div>;
};

export default AddTask;
