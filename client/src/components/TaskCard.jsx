function TaskCard({ task }) {
  return (
    <div>
      <h3>{task.title}</h3>
      <p>
        {task.completed ? "✅ Completed" : "⏳ Pending"}
      </p>

      <p>Priority: {task.priority}</p>
    </div>
  );
}

export default TaskCard;