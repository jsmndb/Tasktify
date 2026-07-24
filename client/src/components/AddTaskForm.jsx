function AddTaskForm() {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h2 className="text-xl font-semibold mb-4">
        Add New Task
      </h2>

      <form>
        <input
          type="text"
          placeholder="Enter task title..."
          className="border rounded-lg p-2 w-full"
        />
      </form>
    </div>
  );
}

export default AddTaskForm;