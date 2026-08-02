function TaskCard({ task, deleteTask, toggleComplete }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 mb-4 border border-gray-200">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{task.title}</h3>

        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            task.priority === "High"
              ? "bg-red-100 text-red-700"
              : task.priority === "Medium"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {task.priority}
        </span>
      </div>

      <p className="mt-3 text-gray-600">
        {task.completed ? "✅ Completed" : "⏳ Pending"}
      </p>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => toggleComplete(task.id)}
          className={`text-white px-3 py-2 rounded ${
            task.completed
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {task.completed ? "Undo" : "Complete"}
        </button>

        <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded">
          Edit
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;