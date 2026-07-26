import { useState } from "react";

function AddTaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTask(title);

    setTitle("");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">
        Add New Task
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg p-2 w-full"
        />
        <p className="mt-2 text-gray-500">
          Current input: {title}
        </p>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-3 hover:bg-blue-700"
        >
          Add Task
        </button>
        </form>
    </div>
  );
}

export default AddTaskForm;