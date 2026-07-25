import { useState } from "react";

function AddTaskForm() {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
        </form>
    </div>
  );
}

export default AddTaskForm;