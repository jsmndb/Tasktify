import TaskCard from "./TaskCard";

function TaskList({ tasks }) {
  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;