import TaskCard from "./TaskCard";

function TaskList({ tasks, deleteTask, toggleComplete }) {
  return (
    <div className="mt-6">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;