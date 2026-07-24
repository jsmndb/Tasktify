import { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import TaskList from "../components/TaskList";
import AddTaskForm from "../components/AddTaskForm";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/tasks")
      .then((response) => {
        setTasks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold">
          Welcome back!
        </h2>

        <main className="max-w-6xl mx-auto p-6">
            <h2 className="text-3xl font-bold">
                Welcome back!
            </h2>

            <p className="text-gray-600 mt-2">
                You have {tasks.length} tasks today.
            </p>

            <AddTaskForm />

            <TaskList tasks={tasks} />
        </main>

        <p className="text-gray-600 mt-2">
          You have {tasks.length} task{tasks.length !== 1 ? "s" : ""} today.
        </p>
      </main>
    </>
  );
}

export default Dashboard;